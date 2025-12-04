export type Category = 
  | 'Financial' 
  | 'Math' 
  | 'Health' 
  | 'Education' 
  | 'Technical' 
  | 'Miscellaneous';

export interface CalculatorInput {
  name: string;
  label: string;
  type: 'number' | 'text' | 'date' | 'select' | 'boolean';
  defaultValue: string | number | boolean;
  options?: string[]; // For select inputs
  placeholder?: string;
  unit?: string;
  description?: string;
  validation?: {
    min?: number;
    max?: number;
    step?: number;
  };
}

export interface CalculatorResult {
  label: string;
  value: string | number;
  unit?: string;
  isPrimary?: boolean; // Highlight this result
  details?: string; // Extra explanation
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CalculatorDef {
  id: string;
  title: string;
  category: Category;
  description: string; // Short description for cards
  icon: string; 
  
  // SEO Fields
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];

  inputs: CalculatorInput[];
  calculate: (values: Record<string, any>) => CalculatorResult[];
  
  // Extended Article Content
  article: {
    intro: string; // "What is this calculator?"
    whyItIsUseful: string; // "Why is it useful?"
    howItWorks: string; // "How it works"
    formula?: string; // Formula breakdown
    realLifeExamples: string; // "Real-life examples"
    tipsAndMistakes: string; // "Tips and mistakes to avoid"
    benefits: string[]; // List of benefits
    faqs: FAQ[]; // FAQ Section
    conclusion: string; // User guidance/conclusion
  };
}