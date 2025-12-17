import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { User, Users, Bike, Bus, Salad, UtensilsCrossed, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface CostOfLivingCalculatorProps {
  language: "pt" | "en";
}

export function CostOfLivingCalculator({ language }: CostOfLivingCalculatorProps) {
  const [household, setHousehold] = useState<"single" | "couple">("single");
  const [useBike, setUseBike] = useState(true);
  const [lifestyle, setLifestyle] = useState<"economic" | "medium" | "comfortable">("medium");
  const [rentBudget, setRentBudget] = useState([1940]);

  const content = {
    pt: {
      household: "Composição",
      single: "Solteiro(a)",
      couple: "Casal",
      transport: "Transporte",
      bikeLabel: "Usa bicicleta?",
      bikeYes: "Sim, como um local!",
      bikeNo: "Não, prefiro transporte público",
      lifestyle: "Estilo de Vida",
      economic: "Econômico",
      medium: "Médio",
      comfortable: "Confortável",
      rent: "Aluguel Estimado",
      breakdown: "Breakdown Mensal",
      rentLabel: "Aluguel",
      bills: "Contas (Energia/Internet/Saúde)",
      groceries: "Mercado/Casa",
      transportLabel: "Transporte",
      taxes: "Impostos Municipais",
      total: "TOTAL ESTIMADO",
      month: "mês",
      perPerson: "por pessoa",
      disclaimer: "* Valores estimados para 2026. O aluguel real pode variar significativamente por localização."
    },
    en: {
      household: "Household",
      single: "Single",
      couple: "Couple",
      transport: "Transport",
      bikeLabel: "Use bicycle?",
      bikeYes: "Yes, like a local!",
      bikeNo: "No, I prefer public transport",
      lifestyle: "Lifestyle",
      economic: "Economic",
      medium: "Medium",
      comfortable: "Comfortable",
      rent: "Estimated Rent",
      breakdown: "Monthly Breakdown",
      rentLabel: "Rent",
      bills: "Bills (Energy/Internet/Health)",
      groceries: "Groceries/Home",
      transportLabel: "Transport",
      taxes: "Municipal Taxes",
      total: "ESTIMATED TOTAL",
      month: "month",
      perPerson: "per person",
      disclaimer: "* Estimated values for 2026. Actual rent may vary significantly by location."
    }
  };

  const c = content[language];

  // Calculate costs based on selections
  const calculateCosts = () => {
    const isCouple = household === "couple";
    
    // Base rent from slider
    const rent = rentBudget[0];
    
    // Bills calculation
    const healthInsurance = isCouple ? 318 : 159; // € 159 per person
    const energy = 172;
    const internet = 55; // internet + mobile
    const bills = healthInsurance + energy + internet;
    
    // Groceries based on lifestyle
    const groceryMultiplier = lifestyle === "economic" ? 0.8 : lifestyle === "comfortable" ? 1.2 : 1;
    const baseGroceries = isCouple ? 771 : 443;
    const groceries = Math.round(baseGroceries * groceryMultiplier);
    
    // Transport
    const transport = useBike ? (isCouple ? 30 : 20) : (isCouple ? 258 : 129);
    
    // Municipal taxes (monthly average)
    const wasteTax = isCouple ? 39 : 29; // € 469/12 or € 352/12
    const waterTax = isCouple ? 39 : 23; // € 465/12 or € 280/12
    const taxes = wasteTax + waterTax;
    
    const total = rent + bills + groceries + transport + taxes;
    
    return { rent, bills, groceries, transport, taxes, total };
  };

  const costs = calculateCosts();

  return (
    <Card className="border-2 border-primary/20 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
        <CardTitle className="text-lg">{c.breakdown}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-8">
        {/* Household Selection */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">{c.household}</Label>
          <RadioGroup
            value={household}
            onValueChange={(v) => setHousehold(v as "single" | "couple")}
            className="grid grid-cols-2 gap-4"
          >
            <Label
              htmlFor="single"
              className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                household === "single" 
                  ? "border-primary bg-primary/10" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              <RadioGroupItem value="single" id="single" className="sr-only" />
              <User className={`w-5 h-5 ${household === "single" ? "text-primary" : "text-muted-foreground"}`} />
              <span className={household === "single" ? "font-medium" : ""}>{c.single}</span>
            </Label>
            <Label
              htmlFor="couple"
              className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                household === "couple" 
                  ? "border-primary bg-primary/10" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              <RadioGroupItem value="couple" id="couple" className="sr-only" />
              <Users className={`w-5 h-5 ${household === "couple" ? "text-primary" : "text-muted-foreground"}`} />
              <span className={household === "couple" ? "font-medium" : ""}>{c.couple}</span>
            </Label>
          </RadioGroup>
        </div>

        {/* Rent Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label className="text-base font-semibold">{c.rent}</Label>
            <span className="text-xl font-bold text-primary">€ {rentBudget[0].toLocaleString()}</span>
          </div>
          <Slider
            value={rentBudget}
            onValueChange={setRentBudget}
            min={1200}
            max={3000}
            step={50}
            className="py-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>€ 1.200</span>
            <span>€ 3.000</span>
          </div>
        </div>

        {/* Transport Toggle */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">{c.transport}</Label>
          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
            <div className="flex items-center gap-3">
              {useBike ? (
                <Bike className="w-5 h-5 text-primary" />
              ) : (
                <Bus className="w-5 h-5 text-muted-foreground" />
              )}
              <span className="text-sm">{useBike ? c.bikeYes : c.bikeNo}</span>
            </div>
            <Switch
              checked={useBike}
              onCheckedChange={setUseBike}
            />
          </div>
        </div>

        {/* Lifestyle Selection */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">{c.lifestyle}</Label>
          <RadioGroup
            value={lifestyle}
            onValueChange={(v) => setLifestyle(v as "economic" | "medium" | "comfortable")}
            className="grid grid-cols-3 gap-3"
          >
            <Label
              htmlFor="economic"
              className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all text-center ${
                lifestyle === "economic" 
                  ? "border-primary bg-primary/10" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              <RadioGroupItem value="economic" id="economic" className="sr-only" />
              <Salad className={`w-5 h-5 ${lifestyle === "economic" ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-sm ${lifestyle === "economic" ? "font-medium" : ""}`}>{c.economic}</span>
            </Label>
            <Label
              htmlFor="medium"
              className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all text-center ${
                lifestyle === "medium" 
                  ? "border-primary bg-primary/10" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              <RadioGroupItem value="medium" id="medium" className="sr-only" />
              <UtensilsCrossed className={`w-5 h-5 ${lifestyle === "medium" ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-sm ${lifestyle === "medium" ? "font-medium" : ""}`}>{c.medium}</span>
            </Label>
            <Label
              htmlFor="comfortable"
              className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all text-center ${
                lifestyle === "comfortable" 
                  ? "border-primary bg-primary/10" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              <RadioGroupItem value="comfortable" id="comfortable" className="sr-only" />
              <Sparkles className={`w-5 h-5 ${lifestyle === "comfortable" ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-sm ${lifestyle === "comfortable" ? "font-medium" : ""}`}>{c.comfortable}</span>
            </Label>
          </RadioGroup>
        </div>

        {/* Cost Breakdown */}
        <div className="pt-6 border-t border-border">
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2">
              <span className="text-muted-foreground">{c.rentLabel}</span>
              <span className="font-semibold">€ {costs.rent.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-muted-foreground">{c.bills}</span>
              <span className="font-semibold">€ {costs.bills.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-muted-foreground">{c.groceries}</span>
              <span className="font-semibold">€ {costs.groceries.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-muted-foreground">{c.transportLabel}</span>
              <span className="font-semibold">€ {costs.transport.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-muted-foreground">{c.taxes}</span>
              <span className="font-semibold">€ {costs.taxes.toLocaleString()}</span>
            </div>
          </div>

          <motion.div 
            key={costs.total}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            className="mt-6 p-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl border border-primary/30"
          >
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">{c.total}</span>
              <div className="text-right">
                <span className="text-3xl font-bold text-primary">
                  € {costs.total.toLocaleString()}
                </span>
                <span className="text-muted-foreground ml-1">/ {c.month}</span>
                {household === "couple" && (
                  <p className="text-sm text-muted-foreground">
                    (€ {Math.round(costs.total / 2).toLocaleString()} {c.perPerson})
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          <p className="mt-4 text-xs text-muted-foreground text-center">
            {c.disclaimer}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
