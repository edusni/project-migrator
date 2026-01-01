import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import DOMPurify from "dompurify";

interface AnimatedBlogContentProps {
  content: string;
}

// Variantes de animação para diferentes elementos
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    filter: "blur(4px)",
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const headingVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -30,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    y: 30,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const blockquoteVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -20,
    borderLeftWidth: 0,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    borderLeftWidth: 4,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -15,
    scale: 0.98,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Componente que anima cada seção conforme entra na viewport
const AnimatedSection = ({ children, variants = itemVariants }: { 
  children: React.ReactNode; 
  variants?: Variants;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedBlogContent = ({ content }: AnimatedBlogContentProps) => {
  const sanitizedContent = DOMPurify.sanitize(content);
  
  // Parse o HTML e converte para elementos animados
  useEffect(() => {
    // Aplicar animações via CSS classes após render
    const proseElement = document.querySelector('.animated-prose');
    if (!proseElement) return;

    // Animar headings
    const headings = proseElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((el, i) => {
      el.classList.add('animate-heading');
      (el as HTMLElement).style.animationDelay = `${i * 0.1}s`;
    });

    // Animar parágrafos
    const paragraphs = proseElement.querySelectorAll('p');
    paragraphs.forEach((el, i) => {
      el.classList.add('animate-paragraph');
      (el as HTMLElement).style.animationDelay = `${0.1 + i * 0.05}s`;
    });

    // Animar listas
    const listItems = proseElement.querySelectorAll('li');
    listItems.forEach((el, i) => {
      el.classList.add('animate-list-item');
      (el as HTMLElement).style.animationDelay = `${0.15 + i * 0.08}s`;
    });

    // Animar blockquotes
    const blockquotes = proseElement.querySelectorAll('blockquote');
    blockquotes.forEach((el, i) => {
      el.classList.add('animate-blockquote');
      (el as HTMLElement).style.animationDelay = `${0.2 + i * 0.1}s`;
    });

    // Animar imagens
    const images = proseElement.querySelectorAll('img');
    images.forEach((el, i) => {
      el.classList.add('animate-image');
      (el as HTMLElement).style.animationDelay = `${0.1 + i * 0.15}s`;
    });

    // Animar tabelas
    const tables = proseElement.querySelectorAll('table');
    tables.forEach((el, i) => {
      el.classList.add('animate-table');
      (el as HTMLElement).style.animationDelay = `${0.2 + i * 0.1}s`;
    });
  }, [sanitizedContent]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="animated-prose prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:scroll-mt-20"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};
