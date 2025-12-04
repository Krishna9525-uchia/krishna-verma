import { CalculatorDef, Category, CalculatorInput, CalculatorResult } from '../types';

// Helper to format currency
const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
const formatNum = (val: number, decimals = 2) => val.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

// ================= FINANCIAL CALCULATORS =================

const loanCalculator: CalculatorDef = {
  id: 'loan-calculator',
  title: 'Loan Calculator',
  category: 'Financial',
  description: 'Calculate monthly payments, total interest, and amortization.',
  icon: '💰',
  metaTitle: 'Free Loan Calculator - Monthly Payments & Interest',
  metaDescription: 'Calculate your monthly loan payments, total interest, and amortization schedule with our free, accurate Loan Calculator. Perfect for mortgages, auto loans, and personal loans.',
  keywords: ['loan calculator', 'monthly payment', 'interest calculator', 'amortization'],
  inputs: [
    { name: 'amount', label: 'Loan Amount', type: 'number', defaultValue: 10000, unit: '$' },
    { name: 'rate', label: 'Interest Rate', type: 'number', defaultValue: 5.5, unit: '%' },
    { name: 'term', label: 'Loan Term', type: 'number', defaultValue: 5, unit: 'Years' },
  ],
  calculate: (values) => {
    const P = Number(values.amount);
    const r = Number(values.rate) / 100 / 12;
    const n = Number(values.term) * 12;
    if (r === 0) return [{ label: 'Monthly Payment', value: formatCurrency(P / n), isPrimary: true }];
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return [
      { label: 'Monthly Payment', value: formatCurrency(emi), isPrimary: true },
      { label: 'Total Interest', value: formatCurrency((emi * n) - P) },
      { label: 'Total Payment', value: formatCurrency(emi * n) },
    ];
  },
  article: {
    intro: "A loan calculator is an essential financial tool designed to help you estimate the monthly payments on a loan. Whether you are planning to buy a new car, finance a home renovation, or consolidate debt, understanding your repayment obligations is the first step toward financial health. This calculator takes the principal amount, interest rate, and loan term to provide a clear picture of your financial commitment.",
    whyItIsUseful: "Taking out a loan is a significant financial decision. Without proper calculation, you might commit to a monthly payment that strains your budget or ends up paying excessive interest over the life of the loan.\n\nThis tool is useful because:\n1. **Budget Planning:** It tells you exactly how much you need to set aside each month.\n2. **Comparison Shopping:** You can quickly compare different loan offers by changing the interest rate and term.\n3. **Debt Strategy:** It shows the total interest paid, helping you decide if a shorter term with higher payments is worth the interest savings.",
    howItWorks: "The calculator uses the standard amortization formula to determine equal monthly payments over the loan term. It balances the principal and interest so that the loan is paid off exactly at the end of the term.\n\n1. **Enter Loan Amount:** The total money you are borrowing.\n2. **Enter Interest Rate:** The annual percentage rate (APR) provided by the lender.\n3. **Enter Term:** The number of years you have to repay the loan.\n\nThe calculator then computes the monthly installment (EMI) and aggregates the total interest payable.",
    formula: "The mathematical formula for calculating the Equated Monthly Installment (EMI) is:\n\nE = P * r * (1 + r)^n / ((1 + r)^n - 1)\n\nWhere:\n- E is the EMI (Monthly Payment)\n- P is the Principal Loan Amount\n- r is the monthly interest rate (Annual Rate / 12 / 100)\n- n is the loan tenure in months",
    realLifeExamples: "**Example 1: Auto Loan**\nImagine you want to buy a car for $25,000. The bank offers a 5-year loan at 4.5% interest.\n- Loan Amount: $25,000\n- Rate: 4.5%\n- Term: 5 Years\nUsing the calculator, your monthly payment would be approximately $466.08, and you would pay a total of $2,964.89 in interest.\n\n**Example 2: Personal Loan**\nYou need $10,000 for home repairs. You can afford $300 a month. You can use the calculator to adjust the term until the payment hits $300, helping you find the right loan duration.",
    tipsAndMistakes: "**Tip 1:** Always look at the 'Total Interest' figure. A lower monthly payment often means a longer term and significantly more interest paid over time.\n\n**Tip 2:** Check for hidden fees. This calculator considers principal and interest, but lenders often charge origination fees or closing costs.\n\n**Mistake to Avoid:** Don't confuse the interest rate with the APR. The APR includes fees and gives a truer cost of the loan.",
    benefits: ["Instant monthly payment estimation.", "Visualization of total interest cost.", "Helps in comparing different loan scenarios.", "Mobile-friendly and fast."],
    faqs: [
      { question: "Does this include property taxes for mortgages?", answer: "No, this is a standard loan calculator for Principal and Interest only. For mortgages, you should also factor in taxes and insurance." },
      { question: "Can I use this for credit cards?", answer: "Yes, you can use it to estimate fixed payments to pay off a credit card balance, though credit card interest is calculated slightly differently on a daily basis." }
    ],
    conclusion: "In conclusion, the Loan Calculator is a powerful ally in your financial planning toolkit. By allowing you to simulate various borrowing scenarios, it empowers you to make informed decisions, ensuring that you borrow within your means and understand the true cost of debt. Use it before signing any loan agreement."
  }
};

const simpleInterest: CalculatorDef = {
  id: 'simple-interest',
  title: 'Simple Interest Calculator',
  category: 'Financial',
  description: 'Calculate simple interest without compounding.',
  icon: '💵',
  metaTitle: 'Simple Interest Calculator - Calculate Interest Earned',
  metaDescription: 'Easily calculate simple interest on your investments or loans. Understand how principal, rate, and time affect your total return.',
  inputs: [
    { name: 'p', label: 'Principal', type: 'number', defaultValue: 1000, unit: '$' },
    { name: 'r', label: 'Annual Rate', type: 'number', defaultValue: 5, unit: '%' },
    { name: 't', label: 'Time', type: 'number', defaultValue: 2, unit: 'Years' },
  ],
  calculate: (v) => {
    const i = (Number(v.p) * Number(v.r) * Number(v.t)) / 100;
    return [
      { label: 'Total Interest', value: formatCurrency(i), isPrimary: true },
      { label: 'Total Amount', value: formatCurrency(Number(v.p) + i) }
    ];
  },
  article: {
    intro: "Simple interest is the most basic way to calculate the cost of borrowing or the return on investment. Unlike compound interest, simple interest is calculated only on the principal amount, not on the accumulated interest. This makes it straightforward and predictable.",
    whyItIsUseful: "This calculator is useful for short-term loans, informal lending between friends/family, or specific types of bonds where interest does not compound. It helps you quickly determine the raw cost of money over time.",
    howItWorks: "The calculator takes the principal amount (the initial sum of money), the annual interest rate, and the time period in years. It multiplies these three values to find the interest.",
    formula: "I = P * r * t / 100\n\nWhere:\n- I = Interest\n- P = Principal\n- r = Annual Rate (%)\n- t = Time (years)",
    realLifeExamples: "**Example:**\nYou lend a friend $1,000 for 2 years at 5% interest.\nI = 1000 * 5 * 2 / 100 = $100.\nYour friend owes you $1,100 total.",
    tipsAndMistakes: "**Tip:** Ensure the time unit matches the rate. If the rate is annual, time must be in years.\n**Mistake:** Don't use this for savings accounts, which almost always use compound interest.",
    benefits: ["Easy to understand.", "Quick calculation.", "Useful for non-compounding assets."],
    faqs: [],
    conclusion: "Use the Simple Interest Calculator for quick estimates on straightforward loans or investments."
  }
};

const bmiCalculator: CalculatorDef = {
  id: 'bmi-calculator',
  title: 'BMI Calculator',
  category: 'Health',
  description: 'Calculate Body Mass Index.',
  icon: '⚖️',
  metaTitle: 'BMI Calculator - Body Mass Index & Weight Status',
  metaDescription: 'Check your Body Mass Index (BMI) instantly. Our free BMI Calculator helps you understand your weight category based on height and weight.',
  inputs: [
    { name: 'weight', label: 'Weight', type: 'number', defaultValue: 70, unit: 'kg' },
    { name: 'height', label: 'Height', type: 'number', defaultValue: 175, unit: 'cm' },
  ],
  calculate: (v) => {
    const h = v.height / 100;
    const bmi = v.weight / (h * h);
    return [
      { label: 'BMI', value: formatNum(bmi, 1), isPrimary: true },
      { label: 'Category', value: bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal' : 'Overweight' }
    ];
  },
  article: {
    intro: "Body Mass Index (BMI) is a widely used screening method to categorize weight status. It provides a simple numeric measure of a person's thickness or thinness, allowing health professionals to discuss weight problems more objectively.",
    whyItIsUseful: "Knowing your BMI is a starting point for understanding your general health. While it doesn't measure body fat directly, it correlates with direct measures of body fat. It helps screen for weight categories that may lead to health problems like heart disease, diabetes, and high blood pressure.",
    howItWorks: "The calculator divides your weight in kilograms by the square of your height in meters. It then categorizes the result:\n- Underweight: < 18.5\n- Normal weight: 18.5 – 24.9\n- Overweight: 25 – 29.9\n- Obesity: 30 or greater",
    formula: "Metric: BMI = weight (kg) / [height (m)]²\nImperial: BMI = 703 * weight (lbs) / [height (in)]²",
    realLifeExamples: "**Example:**\nA person weighs 70kg and is 1.75m tall.\nBMI = 70 / (1.75 * 1.75) = 22.86.\nThis falls into the 'Normal' category.",
    tipsAndMistakes: "**Limitation:** BMI does not distinguish between muscle and fat. An athlete might have a high BMI but low body fat.\n**Tip:** Use BMI alongside other metrics like waist circumference.",
    benefits: ["Quick health screening.", "Standardized metric.", "Easy to track over time."],
    faqs: [
      { question: "Is BMI accurate for athletes?", answer: "No, athletes with high muscle mass may be classified as overweight despite being healthy." }
    ],
    conclusion: "The BMI Calculator is a useful first step in monitoring your health and weight status."
  }
};

const algebraCalculator: CalculatorDef = {
  id: 'algebra-calculator',
  title: 'Algebra Calculator',
  category: 'Math',
  description: 'Solve linear equations involving one variable (ax + b = cx + d).',
  icon: '𝓧',
  metaTitle: 'Algebra Calculator - Linear Equation Solver',
  metaDescription: 'Solve algebraic linear equations instantly. Step-by-step solution for equations like ax + b = cx + d. Great for students and professionals.',
  inputs: [
    { name: 'a', label: 'Coefficient a (Left Side)', type: 'number', defaultValue: 3, description: 'Coefficient of x on the left side' },
    { name: 'b', label: 'Constant b (Left Side)', type: 'number', defaultValue: -5, description: 'Constant term on the left side' },
    { name: 'c', label: 'Coefficient c (Right Side)', type: 'number', defaultValue: 1, description: 'Coefficient of x on the right side' },
    { name: 'd', label: 'Constant d (Right Side)', type: 'number', defaultValue: 7, description: 'Constant term on the right side' },
  ],
  calculate: (v) => {
    const a = Number(v.a);
    const b = Number(v.b);
    const c = Number(v.c);
    const d = Number(v.d);
    
    const numerator = d - b;
    const denominator = a - c;

    const equationStr = `${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)} = ${c}x ${d >= 0 ? '+ ' + d : '- ' + Math.abs(d)}`;

    if (denominator === 0) {
      if (numerator === 0) {
        return [
           { label: 'Result', value: 'Infinite Solutions', isPrimary: true, details: 'The equation is always true (Identity).' },
           { label: 'Equation', value: equationStr }
        ];
      } else {
        return [
           { label: 'Result', value: 'No Solution', isPrimary: true, details: 'The equation is a contradiction.' },
           { label: 'Equation', value: equationStr }
        ];
      }
    }

    const x = numerator / denominator;

    return [
      { label: 'Value of x', value: formatNum(x, 4), isPrimary: true },
      { label: 'Equation', value: equationStr },
      { label: 'Step 1', value: `(${a} - ${c})x = ${d} - ${b}`, details: 'Group x terms and constants' },
      { label: 'Step 2', value: `${formatNum(denominator)}x = ${formatNum(numerator)}`, details: 'Simplify' },
      { label: 'Step 3', value: `x = ${formatNum(numerator)} / ${formatNum(denominator)}` },
    ];
  },
  article: {
    intro: "Algebra is the branch of mathematics that substitutes letters for numbers to solve for unknown values. This Algebra Calculator focuses on solving Linear Equations, which are the fundamental building blocks of algebra. Whether you are a student checking your homework or a professional needing a quick calculation, this tool simplifies the process of finding the value of 'x' in equations where the variable appears on both sides.",
    whyItIsUseful: "Solving for X is a fundamental skill in math, physics, engineering, and economics. This tool automates the balancing process, reducing arithmetic errors and providing a clear step-by-step breakdown that is excellent for learning purposes.",
    howItWorks: "This calculator solves equations of the form **ax + b = cx + d**. \n\n1. Identify the terms in your equation.\n2. Enter the coefficient of x on the left side into field 'a'.\n3. Enter the constant on the left side into field 'b'.\n4. Enter the coefficient of x on the right side into field 'c'. (If there is no x on the right, enter 0).\n5. Enter the constant on the right side into field 'd'.\n\nThe calculator isolates x by subtracting 'cx' from both sides and subtracting 'b' from both sides.",
    formula: `Derivation for ax + b = cx + d:\n\n1. Move x terms to left, constants to right:\n   ax - cx = d - b\n\n2. Factor out x:\n   x(a - c) = d - b\n\n3. Divide by (a - c):\n   x = (d - b) / (a - c)`,
    realLifeExamples: "**Example:**\n3x + 5 = x + 15\nHere, a=3, b=5, c=1, d=15.\nResult: x = (15 - 5) / (3 - 1) = 10 / 2 = 5.",
    tipsAndMistakes: "**Mistake:** Forgetting to change the sign when moving terms across the equals sign. The calculator handles this automatically.\n**Tip:** If 'a' equals 'c', the lines are parallel and there may be no solution.",
    benefits: [
      "Instantly solves linear equations.",
      "Shows step-by-step breakdown.",
      "Handles negative numbers and decimals.",
      "Identifies special cases like 'No Solution' or 'Infinite Solutions'."
    ],
    faqs: [
      { question: "What if my equation doesn't have an x on the right side?", answer: "Simply set the value of 'c' (Right side x coefficient) to 0." },
      { question: "Can I use decimals?", answer: "Yes, the calculator supports decimal coefficients and constants." },
      { question: "What does 'Infinite Solutions' mean?", answer: "It means the equation simplifies to something like 0=0, which is always true regardless of what x is." }
    ],
    conclusion: "Mastering linear equations is easy with this Algebra Calculator. Use the steps provided to verify your own manual work."
  }
};

const compoundInterest: CalculatorDef = {
  id: 'compound-interest',
  title: 'Compound Interest Calculator',
  category: 'Financial',
  description: 'Calculate interest on principal and accumulated interest.',
  icon: '🏛️',
  metaTitle: 'Compound Interest Calculator - Grow Your Wealth',
  metaDescription: 'See the power of compounding. Calculate the future value of your investments with our Compound Interest Calculator.',
  inputs: [
    { name: 'p', label: 'Principal', type: 'number', defaultValue: 5000, unit: '$' },
    { name: 'r', label: 'Annual Rate', type: 'number', defaultValue: 5, unit: '%' },
    { name: 't', label: 'Time', type: 'number', defaultValue: 10, unit: 'Years' },
    { name: 'n', label: 'Compounds per Year', type: 'number', defaultValue: 12 },
  ],
  calculate: (v) => {
    const amount = Number(v.p) * Math.pow((1 + (Number(v.r) / 100) / Number(v.n)), Number(v.n) * Number(v.t));
    return [
      { label: 'Future Value', value: formatCurrency(amount), isPrimary: true },
      { label: 'Total Interest', value: formatCurrency(amount - Number(v.p)) }
    ];
  },
  article: {
    intro: "Compound interest is widely considered the 'eighth wonder of the world'. Unlike simple interest, where you only earn on your initial deposit, compound interest allows you to earn interest on the interest you've already earned.",
    whyItIsUseful: "This is the primary engine behind wealth creation in savings accounts, 401(k)s, and investment portfolios. Understanding how small changes in rate or time affect the outcome can drastically change your retirement planning.",
    howItWorks: "The formula calculates the future value by applying the interest rate periodically to the growing balance.",
    formula: "A = P (1 + r/n)^(nt)\n\nWhere:\n- A = Future Value\n- P = Principal\n- r = Annual Rate (decimal)\n- n = Number of times interest applied per time period\n- t = Number of time periods",
    realLifeExamples: "If you invest $5,000 at 5% compounded monthly for 10 years, you earn over $3,235 in interest. With simple interest, you would only earn $2,500.",
    tipsAndMistakes: "**Tip:** The frequency of compounding matters. Daily compounding yields more than annual compounding.\n**Mistake:** Underestimating the power of time. Starting 5 years earlier can double your result.",
    benefits: ["Visualize wealth growth.", "Compare savings accounts.", "Long-term planning."],
    faqs: [],
    conclusion: "Use the Compound Interest Calculator to project your savings growth and stay motivated."
  }
};

// ... (Continuing with the rest of the calculators following the new schema) ...

const sipCalculator: CalculatorDef = {
  id: 'sip-calculator',
  title: 'SIP Calculator',
  category: 'Financial',
  description: 'Estimate returns on Systematic Investment Plans.',
  icon: '📈',
  metaTitle: 'SIP Calculator - Systematic Investment Plan Returns',
  metaDescription: 'Estimate the future value of your monthly mutual fund investments with our SIP Calculator.',
  inputs: [
    { name: 'investment', label: 'Monthly Investment', type: 'number', defaultValue: 500, unit: '$' },
    { name: 'rate', label: 'Expected Return Rate', type: 'number', defaultValue: 12, unit: '%' },
    { name: 'years', label: 'Time Period', type: 'number', defaultValue: 10, unit: 'Years' },
  ],
  calculate: (values) => {
    const P = Number(values.investment);
    const i = Number(values.rate) / 100 / 12;
    const n = Number(values.years) * 12;
    const fv = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const invested = P * n;
    return [
      { label: 'Maturity Amount', value: formatCurrency(fv), isPrimary: true },
      { label: 'Invested', value: formatCurrency(invested) },
      { label: 'Wealth Gained', value: formatCurrency(fv - invested) },
    ];
  },
  article: {
    intro: "A Systematic Investment Plan (SIP) is a disciplined way of investing in mutual funds by contributing a fixed amount at regular intervals.",
    whyItIsUseful: "SIPs help in rupee-cost averaging and instill financial discipline. This calculator helps you visualize the potential corpus you can build with small monthly contributions.",
    howItWorks: "It uses the future value of an annuity due formula.",
    formula: "FV = P * [ (1+i)^n - 1 ] / i * (1+i)",
    realLifeExamples: "Investing $500/month at 12% for 10 years yields roughly $116k.",
    tipsAndMistakes: "**Tip:** Increase your SIP amount annually to reach goals faster.",
    benefits: ["Discipline.", "Compounding.", "Averaging."],
    faqs: [],
    conclusion: "Start your investment journey today and track it with this SIP Calculator."
  }
};

const inflationCalculator: CalculatorDef = {
  id: 'inflation-calculator',
  title: 'Inflation Calculator',
  category: 'Financial',
  description: 'Calculate the future value of money based on inflation.',
  icon: '🎈',
  metaTitle: 'Inflation Calculator - Future Value of Money',
  metaDescription: 'Understand how inflation affects your purchasing power over time.',
  inputs: [
    { name: 'amount', label: 'Current Amount', type: 'number', defaultValue: 1000, unit: '$' },
    { name: 'rate', label: 'Inflation Rate', type: 'number', defaultValue: 3.5, unit: '%' },
    { name: 'years', label: 'Years', type: 'number', defaultValue: 10 },
  ],
  calculate: (v) => {
    const fv = Number(v.amount) * Math.pow(1 + Number(v.rate) / 100, Number(v.years));
    return [
      { label: 'Future Value', value: formatCurrency(fv), isPrimary: true },
      { label: 'Purchasing Power Loss', value: formatCurrency(fv - Number(v.amount)) }
    ];
  },
  article: {
    intro: "Inflation is the rate at which the general level of prices for goods and services is rising.",
    whyItIsUseful: "It erodes purchasing power. $100 today will buy less in 10 years. This tool helps you plan how much you need in the future to maintain your lifestyle.",
    howItWorks: "Applies the compound interest formula to cost.",
    realLifeExamples: "If inflation is 3%, a $1000 item will cost $1343 in 10 years.",
    tipsAndMistakes: "Don't ignore inflation in retirement planning.",
    benefits: ["Realistic planning.", "Awareness."],
    faqs: [],
    conclusion: "Always account for inflation when setting long-term financial goals."
  }
};

const scientificCalculator: CalculatorDef = {
  id: 'scientific-calculator',
  title: 'Scientific Calculator',
  category: 'Math',
  description: 'Evaluate mathematical expressions (sin, cos, log, etc.).',
  icon: '𝧮',
  metaTitle: 'Online Scientific Calculator - Advanced Math Functions',
  metaDescription: 'Perform advanced calculations including trigonometry, logarithms, and exponents with our free online Scientific Calculator.',
  inputs: [
    { name: 'expr', label: 'Expression', type: 'text', defaultValue: 'Math.sin(3.14/2) + Math.log(10)' },
  ],
  calculate: (v) => {
    try {
      const allowed = v.expr.replace(/[^0-9+\-*/().,MathPIE\s]/g, ''); 
      const res = new Function(`return ${allowed}`)();
      return [{ label: 'Result', value: formatNum(res, 6), isPrimary: true }];
    } catch {
      return [{ label: 'Result', value: 'Error', isPrimary: true }];
    }
  },
  article: {
    intro: "A scientific calculator supports complex mathematical functions beyond basic arithmetic, such as trigonometry, logarithms, and exponentiation.",
    whyItIsUseful: "Essential for engineering, physics, and higher mathematics problems.",
    howItWorks: "This tool interprets JavaScript Math functions. You can write 'Math.sin(x)', 'Math.cos(x)', 'Math.log(x)', etc.",
    realLifeExamples: "Calculating the hypotenuse of a triangle or the decay rate of a substance.",
    tipsAndMistakes: "Remember that trigonometric functions often use Radians, not Degrees.",
    benefits: ["Versatile.", "Supports complex expressions."],
    faqs: [],
    conclusion: "A handy tool for quick scientific computations in your browser."
  }
};

const retirementCalculator: CalculatorDef = {
  id: 'retirement-calculator',
  title: 'Retirement Calculator',
  category: 'Financial',
  description: 'Estimate how much you need to save for retirement.',
  icon: '🏖️',
  metaTitle: 'Retirement Calculator - Plan Your Future',
  metaDescription: 'Are you saving enough for retirement? Use our Retirement Calculator to estimate your nest egg.',
  inputs: [
    { name: 'currentAge', label: 'Current Age', type: 'number', defaultValue: 30 },
    { name: 'retireAge', label: 'Retirement Age', type: 'number', defaultValue: 65 },
    { name: 'currentSavings', label: 'Current Savings', type: 'number', defaultValue: 50000, unit: '$' },
    { name: 'monthlySave', label: 'Monthly Saving', type: 'number', defaultValue: 1000, unit: '$' },
    { name: 'rate', label: 'Annual Return', type: 'number', defaultValue: 7, unit: '%' },
  ],
  calculate: (v) => {
    const months = (Number(v.retireAge) - Number(v.currentAge)) * 12;
    const r = Number(v.rate) / 100 / 12;
    const fvSavings = Number(v.currentSavings) * Math.pow(1 + r, months);
    const fvContrib = Number(v.monthlySave) * ((Math.pow(1 + r, months) - 1) / r);
    return [
      { label: 'Total Retirement Corpus', value: formatCurrency(fvSavings + fvContrib), isPrimary: true },
      { label: 'From Savings', value: formatCurrency(fvSavings) }
    ];
  },
  article: {
    intro: "Retirement planning ensures financial independence in your golden years.",
    whyItIsUseful: "It helps you identify if there is a gap between what you have and what you need.",
    howItWorks: "Combines the future value of a lump sum and the future value of an annuity series.",
    realLifeExamples: "Starting at 30 vs 40 makes a massive difference due to compounding.",
    tipsAndMistakes: "Don't rely solely on social security.",
    benefits: ["Secure your future.", "Identify savings gaps."],
    faqs: [],
    conclusion: "Start planning today to ensure a comfortable retirement."
  }
};

const roiCalculator: CalculatorDef = {
  id: 'roi-calculator',
  title: 'ROI Calculator',
  category: 'Financial',
  description: 'Calculate Return on Investment percentage.',
  icon: '📊',
  metaTitle: 'ROI Calculator - Return on Investment',
  metaDescription: 'Calculate the Return on Investment (ROI) for your business or personal assets.',
  inputs: [
    { name: 'invested', label: 'Amount Invested', type: 'number', defaultValue: 5000, unit: '$' },
    { name: 'returned', label: 'Amount Returned', type: 'number', defaultValue: 7500, unit: '$' },
  ],
  calculate: (v) => {
    const roi = ((Number(v.returned) - Number(v.invested)) / Number(v.invested)) * 100;
    return [{ label: 'ROI', value: formatNum(roi) + '%', isPrimary: true }];
  },
  article: {
    intro: "ROI measures the gain or loss generated on an investment relative to the amount of money invested.",
    whyItIsUseful: "It is the universal metric for comparing the efficiency of different investments.",
    howItWorks: "Subtracts cost from current value, divides by cost, and multiplies by 100.",
    formula: "ROI = (Current Value - Cost) / Cost * 100",
    realLifeExamples: "You spend $100 on ads and make $150 in sales. ROI = 50%.",
    tipsAndMistakes: "ROI doesn't account for the time period (duration) of investment.",
    benefits: ["Evaluate profitability.", "Compare investments."],
    faqs: [],
    conclusion: "Use ROI to make data-driven investment decisions."
  }
};

const discountCalculator: CalculatorDef = {
  id: 'discount-calculator',
  title: 'Discount Calculator',
  category: 'Financial',
  description: 'Calculate sale price after discount and tax.',
  icon: '🏷️',
  metaTitle: 'Discount Calculator - Sale Price & Savings',
  metaDescription: 'Find the final price after discount and sales tax. Perfect for shopping.',
  inputs: [
    { name: 'price', label: 'Original Price', type: 'number', defaultValue: 100, unit: '$' },
    { name: 'discount', label: 'Discount', type: 'number', defaultValue: 20, unit: '%' },
    { name: 'tax', label: 'Sales Tax', type: 'number', defaultValue: 8, unit: '%' },
  ],
  calculate: (v) => {
    const saved = Number(v.price) * (Number(v.discount) / 100);
    const afterDiscount = Number(v.price) - saved;
    const taxAmt = afterDiscount * (Number(v.tax) / 100);
    return [
      { label: 'Final Price', value: formatCurrency(afterDiscount + taxAmt), isPrimary: true },
      { label: 'You Save', value: formatCurrency(saved) }
    ];
  },
  article: {
    intro: "Quickly determine the final price of an item on sale, including tax.",
    whyItIsUseful: "Helps you know exactly what you will pay at the register.",
    howItWorks: "Calculates discount amount, subtracts it, then adds tax to the remainder.",
    realLifeExamples: "A $50 shirt at 20% off with 5% tax costs $42.",
    tipsAndMistakes: "Remember tax is usually applied after the discount.",
    benefits: ["Shopping helper.", "Budgeting."],
    faqs: [],
    conclusion: "Never be surprised at the checkout counter again."
  }
};

const tipCalculator: CalculatorDef = {
  id: 'tip-calculator',
  title: 'Tip Calculator',
  category: 'Financial',
  description: 'Calculate gratuity and split the bill.',
  icon: '🍽️',
  metaTitle: 'Tip Calculator - Split Bill & Gratuity',
  metaDescription: 'Easily calculate tips and split bills among friends.',
  inputs: [
    { name: 'bill', label: 'Bill Amount', type: 'number', defaultValue: 150, unit: '$' },
    { name: 'tip', label: 'Tip Percentage', type: 'number', defaultValue: 15, unit: '%' },
    { name: 'split', label: 'Split Between', type: 'number', defaultValue: 2, unit: 'People' },
  ],
  calculate: (v) => {
    const tipAmt = Number(v.bill) * (Number(v.tip) / 100);
    const total = Number(v.bill) + tipAmt;
    return [
      { label: 'Per Person', value: formatCurrency(total / Number(v.split)), isPrimary: true },
      { label: 'Total Tip', value: formatCurrency(tipAmt) },
      { label: 'Total Bill', value: formatCurrency(total) }
    ];
  },
  article: {
    intro: "Easily split the bill and calculate tips at restaurants.",
    whyItIsUseful: "Avoids awkward math moments after a meal.",
    howItWorks: "Calculates tip percentage and divides total by number of people.",
    realLifeExamples: "Dinner for 4 costs $200. 20% tip is $40. Total $240. Each pays $60.",
    tipsAndMistakes: "Tip based on pre-tax amount if possible.",
    benefits: ["Avoid math errors.", "Fair bill splitting."],
    faqs: [],
    conclusion: "Make group dining hassle-free."
  }
};

const percentageCalculator: CalculatorDef = {
  id: 'percentage-calculator',
  title: 'Percentage Calculator',
  category: 'Math',
  description: 'Calculate percentages and percentage changes.',
  icon: '%',
  metaTitle: 'Percentage Calculator - Find % of a Number',
  metaDescription: 'Solve percentage problems instantly. Calculate percentage increase, decrease, or find the value of a percentage.',
  inputs: [
    { name: 'val1', label: 'Value', type: 'number', defaultValue: 50 },
    { name: 'val2', label: 'Total', type: 'number', defaultValue: 200 },
  ],
  calculate: (v) => [
    { label: 'Percentage', value: formatNum((Number(v.val1) / Number(v.val2)) * 100) + '%', isPrimary: true }
  ],
  article: {
    intro: "Percentages are a way to express a number as a fraction of 100.",
    whyItIsUseful: "Used everywhere from discounts to grades to financial interest.",
    howItWorks: "Value / Total * 100.",
    realLifeExamples: "50 out of 200 is 25%.",
    tipsAndMistakes: "Don't confuse percent of with percent off.",
    benefits: ["Simple.", "Essential math tool."],
    faqs: [],
    conclusion: "A fundamental tool for everyday math."
  }
};

const equationSolver: CalculatorDef = {
  id: 'quadratic-solver',
  title: 'Quadratic Equation Solver',
  category: 'Math',
  description: 'Solve ax² + bx + c = 0',
  icon: '📐',
  metaTitle: 'Quadratic Equation Solver',
  metaDescription: 'Find the roots of quadratic equations instantly.',
  inputs: [
    { name: 'a', label: 'a', type: 'number', defaultValue: 1 },
    { name: 'b', label: 'b', type: 'number', defaultValue: -3 },
    { name: 'c', label: 'c', type: 'number', defaultValue: 2 },
  ],
  calculate: (v) => {
    const d = (v.b * v.b) - (4 * v.a * v.c);
    if (d < 0) return [{ label: 'Roots', value: 'Complex/Imaginary', isPrimary: true }];
    const x1 = (-v.b + Math.sqrt(d)) / (2 * v.a);
    const x2 = (-v.b - Math.sqrt(d)) / (2 * v.a);
    return [{ label: 'Roots', value: `x1 = ${formatNum(x1)}, x2 = ${formatNum(x2)}`, isPrimary: true }];
  },
  article: {
    intro: "Find the roots of a quadratic equation.",
    whyItIsUseful: "Quadratic functions model projectile motion and other physics curves.",
    howItWorks: "Uses the quadratic formula.",
    formula: "(-b ± √d) / 2a",
    realLifeExamples: "Calculating the trajectory of a ball.",
    tipsAndMistakes: "Watch out for negative discriminants.",
    benefits: ["Fast roots.", "Handles decimals."],
    faqs: [],
    conclusion: "Solve parabolas with ease."
  }
};

const averageCalculator: CalculatorDef = {
  id: 'average-calculator',
  title: 'Average Calculator',
  category: 'Math',
  description: 'Calculate Mean, Median, and Mode.',
  icon: '📉',
  metaTitle: 'Average Calculator - Mean, Median, Mode',
  metaDescription: 'Calculate statistical averages from a set of numbers.',
  inputs: [
    { name: 'nums', label: 'Numbers (comma separated)', type: 'text', defaultValue: '10, 20, 30, 40, 50' },
  ],
  calculate: (v) => {
    const arr = v.nums.split(',').map((n: string) => parseFloat(n.trim())).filter((n: number) => !isNaN(n));
    if (arr.length === 0) return [{label: 'Result', value: 0}];
    const sum = arr.reduce((a: number, b: number) => a + b, 0);
    const mean = sum / arr.length;
    return [
      { label: 'Mean (Average)', value: formatNum(mean), isPrimary: true },
      { label: 'Sum', value: sum },
      { label: 'Count', value: arr.length }
    ];
  },
  article: {
    intro: "Compute statistical average.",
    whyItIsUseful: "Summarize data sets.",
    howItWorks: "Sum / Count.",
    realLifeExamples: "Average test score of a class.",
    tipsAndMistakes: "Ensure data is entered correctly.",
    benefits: ["Quick summary stats."],
    faqs: [],
    conclusion: "Understand your data better."
  }
};

const permutationCalculator: CalculatorDef = {
  id: 'permutation-calculator',
  title: 'Permutation & Combination',
  category: 'Math',
  description: 'Calculate nPr and nCr.',
  icon: '🎲',
  metaTitle: 'Permutation & Combination Calculator',
  metaDescription: 'Calculate nPr and nCr for probability problems.',
  inputs: [
    { name: 'n', label: 'n (Total items)', type: 'number', defaultValue: 5 },
    { name: 'r', label: 'r (Selected items)', type: 'number', defaultValue: 3 },
  ],
  calculate: (v) => {
    const fact = (n: number): number => n <= 1 ? 1 : n * fact(n - 1);
    const n = Math.floor(Number(v.n));
    const r = Math.floor(Number(v.r));
    if (n < r) return [{ label: 'Error', value: 'n must be >= r' }];
    const nPr = fact(n) / fact(n - r);
    const nCr = fact(n) / (fact(r) * fact(n - r));
    return [
      { label: 'Permutation (nPr)', value: nPr, isPrimary: true },
      { label: 'Combination (nCr)', value: nCr }
    ];
  },
  article: {
    intro: "Calculate number of ways to arrange or select items.",
    whyItIsUseful: "Essential for probability and statistics.",
    howItWorks: "Uses factorials.",
    realLifeExamples: "Lottery odds calculation.",
    tipsAndMistakes: "Permutation: Order matters. Combination: Order doesn't matter.",
    benefits: ["Solves counting problems."],
    faqs: [],
    conclusion: "Master probability theory basics."
  }
};

const bmrCalculator: CalculatorDef = {
  id: 'bmr-calculator',
  title: 'BMR Calculator',
  category: 'Health',
  description: 'Basal Metabolic Rate (Mifflin-St Jeor).',
  icon: '🔥',
  metaTitle: 'BMR Calculator - Basal Metabolic Rate',
  metaDescription: 'Calculate how many calories your body burns at rest.',
  inputs: [
    { name: 'w', label: 'Weight (kg)', type: 'number', defaultValue: 70 },
    { name: 'h', label: 'Height (cm)', type: 'number', defaultValue: 170 },
    { name: 'a', label: 'Age', type: 'number', defaultValue: 30 },
    { name: 'g', label: 'Gender (1=Male, 0=Female)', type: 'select', defaultValue: 'Male', options: ['Male', 'Female'] },
  ],
  calculate: (v) => {
    const s = v.g === 'Male' ? 5 : -161;
    const bmr = 10 * v.w + 6.25 * v.h - 5 * v.a + s;
    return [{ label: 'BMR (Calories/day)', value: formatNum(bmr, 0), isPrimary: true }];
  },
  article: {
    intro: "BMR is energy expended at rest.",
    whyItIsUseful: "Foundation for diet planning.",
    howItWorks: "Mifflin-St Jeor equation.",
    realLifeExamples: "If your BMR is 1600, you burn that just by existing.",
    tipsAndMistakes: "BMR is not TDEE (Total Daily Energy Expenditure).",
    benefits: ["Weight loss planning."],
    faqs: [],
    conclusion: "Know your baseline energy needs."
  }
};

const calorieCalculator: CalculatorDef = {
  id: 'calorie-calculator',
  title: 'Calorie Calculator',
  category: 'Health',
  description: 'Daily Calorie Needs (TDEE).',
  icon: '🍎',
  metaTitle: 'Calorie Calculator - TDEE & Weight Loss',
  metaDescription: 'Find out how many calories you need to maintain, lose, or gain weight.',
  inputs: [
    { name: 'bmr', label: 'BMR (Calculate using BMR tool)', type: 'number', defaultValue: 1600 },
    { name: 'act', label: 'Activity Level', type: 'select', defaultValue: 'Sedentary', options: ['Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active'] },
  ],
  calculate: (v) => {
    const mul = { 'Sedentary': 1.2, 'Lightly Active': 1.375, 'Moderately Active': 1.55, 'Very Active': 1.725 }[v.act as string] || 1.2;
    return [{ label: 'Daily Calories', value: formatNum(Number(v.bmr) * mul, 0), isPrimary: true }];
  },
  article: {
    intro: "Total Daily Energy Expenditure.",
    whyItIsUseful: "Tells you how much to eat to reach goals.",
    howItWorks: "BMR x Activity Multiplier",
    realLifeExamples: "Sedentary person needs BMR x 1.2.",
    tipsAndMistakes: "Be honest about activity level.",
    benefits: ["Diet control."],
    faqs: [],
    conclusion: "Control your weight with precision."
  }
};

const bodyFatCalculator: CalculatorDef = {
  id: 'body-fat-calculator',
  title: 'Body Fat Calculator',
  category: 'Health',
  description: 'Estimate body fat percentage (US Navy Method).',
  icon: '💪',
  metaTitle: 'Body Fat Calculator - US Navy Method',
  metaDescription: 'Estimate your body fat percentage without calipers.',
  inputs: [
    { name: 'waist', label: 'Waist (cm)', type: 'number', defaultValue: 85 },
    { name: 'neck', label: 'Neck (cm)', type: 'number', defaultValue: 38 },
    { name: 'height', label: 'Height (cm)', type: 'number', defaultValue: 178 },
  ],
  calculate: (v) => {
    const fat = 495 / (1.0324 - 0.19077 * Math.log10(v.waist - v.neck) + 0.15456 * Math.log10(v.height)) - 450;
    return [{ label: 'Body Fat %', value: formatNum(fat, 1) + '%', isPrimary: true }];
  },
  article: {
    intro: "Estimate body fat without calipers.",
    whyItIsUseful: "Better health metric than BMI.",
    howItWorks: "Based on body measurements.",
    realLifeExamples: "Lower body fat generally means more definition.",
    tipsAndMistakes: "Measure consistently in the morning.",
    benefits: ["Fitness tracking."],
    faqs: [],
    conclusion: "Track your fitness progress."
  }
};

const idealWeightCalculator: CalculatorDef = {
  id: 'ideal-weight-calculator',
  title: 'Ideal Weight Calculator',
  category: 'Health',
  description: 'Calculate ideal weight (Devine Formula).',
  icon: '🧍',
  metaTitle: 'Ideal Weight Calculator',
  metaDescription: 'Find your ideal body weight based on height and gender.',
  inputs: [
    { name: 'height', label: 'Height (cm)', type: 'number', defaultValue: 175 },
    { name: 'gender', label: 'Gender', type: 'select', defaultValue: 'Male', options: ['Male', 'Female'] },
  ],
  calculate: (v) => {
    const heightInches = v.height / 2.54;
    const base = v.gender === 'Male' ? 50 : 45.5;
    const w = base + 2.3 * (heightInches - 60);
    return [{ label: 'Ideal Weight (kg)', value: formatNum(w, 1), isPrimary: true }];
  },
  article: {
    intro: "Devine Formula for ideal weight.",
    whyItIsUseful: "Set realistic weight goals.",
    howItWorks: "Height based.",
    realLifeExamples: "5'10\" male ideal weight is approx 73kg.",
    tipsAndMistakes: "It's just an estimate, not a strict rule.",
    benefits: ["Goal setting."],
    faqs: [],
    conclusion: "A target for your health journey."
  }
};

const gpaCalculator: CalculatorDef = {
  id: 'gpa-calculator',
  title: 'GPA Calculator',
  category: 'Education',
  description: 'Calculate Grade Point Average.',
  icon: '🎓',
  metaTitle: 'GPA Calculator - College & High School',
  metaDescription: 'Calculate your semester or cumulative GPA easily.',
  inputs: [
    { name: 'g1', label: 'Grade 1 (0-4)', type: 'number', defaultValue: 4 },
    { name: 'c1', label: 'Credits 1', type: 'number', defaultValue: 3 },
    { name: 'g2', label: 'Grade 2 (0-4)', type: 'number', defaultValue: 3.5 },
    { name: 'c2', label: 'Credits 2', type: 'number', defaultValue: 3 },
  ],
  calculate: (v) => {
    const pts = (v.g1 * v.c1) + (v.g2 * v.c2);
    const cr = v.c1 + v.c2;
    return [{ label: 'GPA', value: formatNum(pts / cr, 2), isPrimary: true }];
  },
  article: {
    intro: "Calculate semester GPA.",
    whyItIsUseful: "Track academic progress.",
    howItWorks: "Weighted average of grades.",
    realLifeExamples: "3 credits of A and 3 credits of B = 3.5 GPA.",
    tipsAndMistakes: "Check your school's grading scale.",
    benefits: ["Academic planning."],
    faqs: [],
    conclusion: "Stay on top of your grades."
  }
};

const bandwidthCalculator: CalculatorDef = {
  id: 'bandwidth-calculator',
  title: 'Data Transfer Calculator',
  category: 'Technical',
  description: 'Calculate download time.',
  icon: '🌐',
  metaTitle: 'Download Time Calculator',
  metaDescription: 'How long will it take to download a file? Check now.',
  inputs: [
    { name: 'size', label: 'File Size (GB)', type: 'number', defaultValue: 10 },
    { name: 'speed', label: 'Speed (Mbps)', type: 'number', defaultValue: 100 },
  ],
  calculate: (v) => {
    const time = (v.size * 8000) / v.speed; // Size in Mb divided by Mbps
    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    return [{ label: 'Time', value: `${h}h ${m}m ${Math.round(time % 60)}s`, isPrimary: true }];
  },
  article: {
    intro: "Estimate download times.",
    whyItIsUseful: "Plan large downloads.",
    howItWorks: "Size / Speed",
    realLifeExamples: "10GB at 100Mbps takes about 13 minutes.",
    tipsAndMistakes: "Speed fluctuates in real life.",
    benefits: ["Time management."],
    faqs: [],
    conclusion: "Know when your download finishes."
  }
};

const ageCalculator: CalculatorDef = {
  id: 'age-calculator',
  title: 'Age Calculator',
  category: 'Miscellaneous',
  description: 'Calculate precise age.',
  icon: '📅',
  metaTitle: 'Age Calculator - Calculate Exact Age',
  metaDescription: 'Find out exactly how old you are in years, months, and days.',
  inputs: [{ name: 'birth', label: 'Birth Date', type: 'date', defaultValue: '2000-01-01' }],
  calculate: (v) => {
    const ageMs = Date.now() - new Date(v.birth).getTime();
    const ageDt = new Date(ageMs);
    return [{ label: 'Age', value: Math.abs(ageDt.getUTCFullYear() - 1970) + ' Years', isPrimary: true }];
  },
  article: {
    intro: "Find your exact age.",
    whyItIsUseful: "Birthday planning, legal forms.",
    howItWorks: "Date subtraction.",
    realLifeExamples: "Born 2000, age is current year - 2000.",
    tipsAndMistakes: "Accounts for leap years.",
    benefits: ["Precise."],
    faqs: [],
    conclusion: "Simple and fun."
  }
};

// ... Adding placeholders for the rest to ensure all previously defined calculators work with the new type definition ...

const ratioCalculator: CalculatorDef = {
  id: 'ratio-calculator', title: 'Ratio Calculator', category: 'Math', description: 'Solve ratio problems A:B = C:X.', icon: '➗', metaTitle: 'Ratio Calculator', metaDescription: 'Solve proportions.',
  inputs: [{ name: 'a', label: 'A', type: 'number', defaultValue: 2 }, { name: 'b', label: 'B', type: 'number', defaultValue: 4 }, { name: 'c', label: 'C', type: 'number', defaultValue: 10 }],
  calculate: (v) => [{ label: 'X', value: formatNum((Number(v.b) * Number(v.c)) / Number(v.a)), isPrimary: true }],
  article: { intro: "Find missing value in proportion.", whyItIsUseful: "Scaling recipes, maps.", howItWorks: "Cross multiplication.", realLifeExamples: "2 cups for 4 people, how many for 10?", tipsAndMistakes: "", benefits: ["Easy scaling."], faqs: [], conclusion: "Useful for everyday math." }
};

const squareRoot: CalculatorDef = {
  id: 'square-root', title: 'Square Root Calculator', category: 'Math', description: 'Find square and cube roots.', icon: '🔢', metaTitle: 'Square Root Calculator', metaDescription: 'Calculate roots.',
  inputs: [{ name: 'n', label: 'Number', type: 'number', defaultValue: 64 }],
  calculate: (v) => [{ label: 'Square Root', value: Math.sqrt(v.n), isPrimary: true }, { label: 'Cube Root', value: Math.cbrt(v.n) }],
  article: { intro: "Calculate roots.", whyItIsUseful: "Geometry problems.", howItWorks: "Math.sqrt", realLifeExamples: "Area of square to side length.", tipsAndMistakes: "", benefits: [], faqs: [], conclusion: "" }
};

const exponentCalculator: CalculatorDef = {
  id: 'exponent-calculator', title: 'Exponent Calculator', category: 'Math', description: 'Calculate base raised to power.', icon: '🚀', metaTitle: 'Exponent Calculator', metaDescription: 'Calculate powers.',
  inputs: [{ name: 'base', label: 'Base', type: 'number', defaultValue: 2 }, { name: 'exp', label: 'Exponent', type: 'number', defaultValue: 10 }],
  calculate: (v) => [{ label: 'Result', value: Math.pow(v.base, v.exp), isPrimary: true }],
  article: { intro: "Calculate powers.", whyItIsUseful: "Scientific notation.", howItWorks: "Base^Exp", realLifeExamples: "2^10 = 1024", tipsAndMistakes: "", benefits: [], faqs: [], conclusion: "" }
};

const waterIntake: CalculatorDef = {
  id: 'water-intake', title: 'Water Intake Calculator', category: 'Health', description: 'Daily water hydration needs.', icon: '💧', metaTitle: 'Water Intake Calculator', metaDescription: 'How much water should you drink?',
  inputs: [{ name: 'weight', label: 'Weight (kg)', type: 'number', defaultValue: 70 }],
  calculate: (v) => [{ label: 'Daily Water (Liters)', value: formatNum(v.weight * 0.033, 1), isPrimary: true }],
  article: { intro: "Stay hydrated.", whyItIsUseful: "Health maintenance.", howItWorks: "Weight * 0.033", realLifeExamples: "70kg needs 2.3L.", tipsAndMistakes: "", benefits: [], faqs: [], conclusion: "" }
};

const paceCalculator: CalculatorDef = {
  id: 'pace-calculator', title: 'Pace Calculator', category: 'Health', description: 'Calculate running pace.', icon: '🏃', metaTitle: 'Pace Calculator', metaDescription: 'Calculate running speed.',
  inputs: [{ name: 'time', label: 'Time (minutes)', type: 'number', defaultValue: 30 }, { name: 'dist', label: 'Distance (km)', type: 'number', defaultValue: 5 }],
  calculate: (v) => [{ label: 'Pace (min/km)', value: formatNum(v.time / v.dist, 2), isPrimary: true }],
  article: { intro: "Check your running speed.", whyItIsUseful: "Race training.", howItWorks: "Time/Dist", realLifeExamples: "5k in 30mins is 6min/km.", tipsAndMistakes: "", benefits: [], faqs: [], conclusion: "" }
};

const gradeCalculator: CalculatorDef = {
  id: 'grade-calculator', title: 'Grade Calculator', category: 'Education', description: 'Find required grade for target.', icon: '📝', metaTitle: 'Grade Calculator', metaDescription: 'What do you need on the final?',
  inputs: [{ name: 'current', label: 'Current Grade %', type: 'number', defaultValue: 85 }, { name: 'weight', label: 'Final Exam Weight %', type: 'number', defaultValue: 40 }, { name: 'target', label: 'Target Grade %', type: 'number', defaultValue: 90 }],
  calculate: (v) => {
    const required = (v.target - (v.current * (1 - v.weight / 100))) / (v.weight / 100);
    return [{ label: 'Required on Final', value: formatNum(required, 1) + '%', isPrimary: true }];
  },
  article: { intro: "Target grade planner.", whyItIsUseful: "Exam stress reduction.", howItWorks: "Algebra.", realLifeExamples: "Need 95% to get an A.", tipsAndMistakes: "", benefits: [], faqs: [], conclusion: "" }
};

const typingTest: CalculatorDef = {
  id: 'typing-speed', title: 'Typing Speed (WPM)', category: 'Education', description: 'Calculate Words Per Minute.', icon: '⌨️', metaTitle: 'WPM Calculator', metaDescription: 'Check typing speed.',
  inputs: [{ name: 'chars', label: 'Characters Typed', type: 'number', defaultValue: 1500 }, { name: 'time', label: 'Time (minutes)', type: 'number', defaultValue: 5 }, { name: 'errors', label: 'Errors', type: 'number', defaultValue: 2 }],
  calculate: (v) => {
    const wpm = (v.chars / 5 - v.errors) / v.time;
    return [{ label: 'Net WPM', value: Math.max(0, Math.round(wpm)), isPrimary: true }];
  },
  article: { intro: "Measure typing proficiency.", whyItIsUseful: "Job skills.", howItWorks: "Standard formula.", realLifeExamples: "", tipsAndMistakes: "", benefits: [], faqs: [], conclusion: "" }
};

const binaryConverter: CalculatorDef = {
  id: 'binary-converter', title: 'Binary Converter', category: 'Technical', description: 'Decimal to Binary and Hex.', icon: '0️⃣', metaTitle: 'Binary Converter', metaDescription: 'Convert numbers bases.',
  inputs: [{ name: 'd', label: 'Decimal Number', type: 'number', defaultValue: 255 }],
  calculate: (v) => [{ label: 'Binary', value: Number(v.d).toString(2), isPrimary: true }, { label: 'Hexadecimal', value: Number(v.d).toString(16).toUpperCase() }],
  article: { intro: "Convert bases.", whyItIsUseful: "Programming.", howItWorks: "Radix conversion.", realLifeExamples: "255 is FF.", tipsAndMistakes: "", benefits: [], faqs: [], conclusion: "" }
};

const hexConverter: CalculatorDef = {
  id: 'hex-converter', title: 'Hex Converter', category: 'Technical', description: 'Hex to Decimal.', icon: 'F️⃣', metaTitle: 'Hex to Decimal', metaDescription: 'Convert Hex.',
  inputs: [{ name: 'h', label: 'Hex Value', type: 'text', defaultValue: 'FF' }],
  calculate: (v) => [{ label: 'Decimal', value: parseInt(v.h, 16) || 0, isPrimary: true }],
  article: { intro: "Hex to integer.", whyItIsUseful: "Web colors.", howItWorks: "Parse Int.", realLifeExamples: "", tipsAndMistakes: "", benefits: [], faqs: [], conclusion: "" }
};

const passwordStrength: CalculatorDef = {
  id: 'password-strength', title: 'Password Strength', category: 'Technical', description: 'Check entropy of password.', icon: '🔒', metaTitle: 'Password Strength Checker', metaDescription: 'Test your password security.',
  inputs: [{ name: 'pwd', label: 'Password', type: 'text', defaultValue: 'Password123!' }],
  calculate: (v) => {
    const p = v.pwd || ''; let s = 0; if (p.length > 8) s += 20; if (/[A-Z]/.test(p)) s += 20; if (/[0-9]/.test(p)) s += 20; if (/[^A-Za-z0-9]/.test(p)) s += 40;
    return [{ label: 'Score', value: Math.min(100, s) + '/100', isPrimary: true }];
  },
  article: { intro: "Estimate security.", whyItIsUseful: "Prevent hacking.", howItWorks: "Complexity rules.", realLifeExamples: "", tipsAndMistakes: "", benefits: [], faqs: [], conclusion: "" }
};

const ipSubnet: CalculatorDef = {
  id: 'ip-subnet', title: 'IP Subnet Calculator', category: 'Technical', description: 'Calculate host range from IP/CIDR.', icon: '💻', metaTitle: 'Subnet Calculator', metaDescription: 'Calculate IP ranges.',
  inputs: [{ name: 'ip', label: 'IP Address', type: 'text', defaultValue: '192.168.1.1' }, { name: 'cidr', label: 'CIDR (/x)', type: 'number', defaultValue: 24 }],
  calculate: (v) => {
    const hosts = Math.pow(2, 32 - v.cidr) - 2;
    return [{ label: 'Usable Hosts', value: hosts > 0 ? hosts : 0, isPrimary: true }];
  },
  article: { intro: "Network planning.", whyItIsUseful: "IT Admin.", howItWorks: "Binary math.", realLifeExamples: "/24 has 254 hosts.", tipsAndMistakes: "", benefits: [], faqs: [], conclusion: "" }
};

const dateDifference: CalculatorDef = {
  id: 'date-diff', title: 'Date Difference', category: 'Miscellaneous', description: 'Days between two dates.', icon: '🗓️', metaTitle: 'Days Between Dates', metaDescription: 'Count days between dates.',
  inputs: [{ name: 'd1', label: 'Start Date', type: 'date', defaultValue: '2024-01-01' }, { name: 'd2', label: 'End Date', type: 'date', defaultValue: '2024-12-31' }],
  calculate: (v) => {
    const diff = Math.abs(new Date(v.d2).getTime() - new Date(v.d1).getTime());
    return [{ label: 'Days', value: Math.ceil(diff / (1000 * 60 * 60 * 24)), isPrimary: true }];
  },
  article: { intro: "Count days.", whyItIsUseful: "Scheduling.", howItWorks: "Timestamp diff.", realLifeExamples: "", tipsAndMistakes: "", benefits: [], faqs: [], conclusion: "" }
};

const timeDuration: CalculatorDef = {
  id: 'time-duration', title: 'Time Duration', category: 'Miscellaneous', description: 'Hours between two times.', icon: '⌚', metaTitle: 'Time Duration Calculator', metaDescription: 'Calculate hours worked.',
  inputs: [{ name: 't1', label: 'Start Time', type: 'text', defaultValue: '09:00', placeholder: 'HH:MM' }, { name: 't2', label: 'End Time', type: 'text', defaultValue: '17:30', placeholder: 'HH:MM' }],
  calculate: (v) => {
    const [h1, m1] = v.t1.split(':').map(Number);
    const [h2, m2] = v.t2.split(':').map(Number);
    let diff = (h2 * 60 + m2) - (h1 * 60 + m1);
    if (diff < 0) diff += 24 * 60;
    const h = Math.floor(diff / 60);
    return [{ label: 'Duration', value: `${h}h ${diff % 60}m`, isPrimary: true }];
  },
  article: { intro: "Calculate work hours.", whyItIsUseful: "Timesheets.", howItWorks: "Time arithmetic.", realLifeExamples: "", tipsAndMistakes: "", benefits: [], faqs: [], conclusion: "" }
};

const lengthConverter: CalculatorDef = {
  id: 'length-converter', title: 'Length Converter', category: 'Miscellaneous', description: 'Convert Meters to Feet, Inches, etc.', icon: '📏', metaTitle: 'Length Converter', metaDescription: 'Convert metric to imperial.',
  inputs: [{ name: 'val', label: 'Value', type: 'number', defaultValue: 1 }, { name: 'unit', label: 'From Unit', type: 'select', defaultValue: 'Meter', options: ['Meter', 'Foot', 'Inch', 'Yard'] }],
  calculate: (v) => {
    const m = v.unit === 'Meter' ? v.val : v.unit === 'Foot' ? v.val / 3.28084 : v.unit === 'Inch' ? v.val / 39.37 : v.val / 1.09361;
    return [
      { label: 'Meters', value: formatNum(m, 4) },
      { label: 'Feet', value: formatNum(m * 3.28084, 4) },
      { label: 'Inches', value: formatNum(m * 39.37, 4) },
      { label: 'Yards', value: formatNum(m * 1.09361, 4) },
    ];
  },
  article: { intro: "Convert length.", whyItIsUseful: "Construction.", howItWorks: "Multipliers.", realLifeExamples: "", tipsAndMistakes: "", benefits: [], faqs: [], conclusion: "" }
};

const weightConverter: CalculatorDef = {
  id: 'weight-converter', title: 'Weight Converter', category: 'Miscellaneous', description: 'Convert Kg, Lbs, Oz.', icon: '⚖️', metaTitle: 'Weight Converter', metaDescription: 'Convert Kg to Lbs.',
  inputs: [{ name: 'val', label: 'Value', type: 'number', defaultValue: 1 }, { name: 'unit', label: 'From Unit', type: 'select', defaultValue: 'Kg', options: ['Kg', 'Lbs', 'Ounce'] }],
  calculate: (v) => {
    const k = v.unit === 'Kg' ? v.val : v.unit === 'Lbs' ? v.val * 0.453592 : v.val * 0.0283495;
    return [
      { label: 'Kilograms', value: formatNum(k, 3) },
      { label: 'Pounds', value: formatNum(k * 2.20462, 3) },
      { label: 'Ounces', value: formatNum(k * 35.274, 3) },
    ];
  },
  article: { intro: "Convert weight.", whyItIsUseful: "Shipping.", howItWorks: "Multipliers.", realLifeExamples: "", tipsAndMistakes: "", benefits: [], faqs: [], conclusion: "" }
};

const tempConverter: CalculatorDef = {
  id: 'temp-converter', title: 'Temperature Converter', category: 'Miscellaneous', description: 'Celsius to Fahrenheit and Kelvin.', icon: '🌡️', metaTitle: 'Temperature Converter', metaDescription: 'C to F converter.',
  inputs: [{ name: 'c', label: 'Celsius', type: 'number', defaultValue: 25 }],
  calculate: (v) => [
    { label: 'Fahrenheit', value: formatNum((v.c * 9/5) + 32, 1) + '°F', isPrimary: true },
    { label: 'Kelvin', value: formatNum(Number(v.c) + 273.15, 2) + 'K' }
  ],
  article: { intro: "Convert temperature.", whyItIsUseful: "Weather.", howItWorks: "Standard formula.", realLifeExamples: "", tipsAndMistakes: "", benefits: [], faqs: [], conclusion: "" }
};

const fuelCost: CalculatorDef = {
  id: 'fuel-cost', title: 'Fuel Cost Calculator', category: 'Miscellaneous', description: 'Trip cost estimation.', icon: '⛽', metaTitle: 'Fuel Cost Calculator', metaDescription: 'Calculate gas money for trips.',
  inputs: [{ name: 'dist', label: 'Distance (km)', type: 'number', defaultValue: 100 }, { name: 'eff', label: 'Efficiency (km/L)', type: 'number', defaultValue: 15 }, { name: 'price', label: 'Fuel Price ($/L)', type: 'number', defaultValue: 1.5 },],
  calculate: (v) => [{ label: 'Trip Cost', value: formatCurrency((v.dist / v.eff) * v.price), isPrimary: true }],
  article: { intro: "Estimate travel expenses.", whyItIsUseful: "Budgeting trips.", howItWorks: "Distance/Efficiency * Price.", realLifeExamples: "", tipsAndMistakes: "", benefits: [], faqs: [], conclusion: "" }
};

// Export all
export const calculators: CalculatorDef[] = [
  // Financial
  loanCalculator, simpleInterest, compoundInterest, sipCalculator, inflationCalculator, 
  retirementCalculator, roiCalculator, discountCalculator, tipCalculator, fuelCost,
  
  // Math
  algebraCalculator, scientificCalculator, percentageCalculator, equationSolver, averageCalculator, 
  permutationCalculator, ratioCalculator, squareRoot, exponentCalculator,
  
  // Health
  bmiCalculator, bmrCalculator, calorieCalculator, bodyFatCalculator, 
  idealWeightCalculator, waterIntake, paceCalculator,
  
  // Education
  gpaCalculator, gradeCalculator, typingTest,
  
  // Technical
  bandwidthCalculator, binaryConverter, hexConverter, passwordStrength, ipSubnet,
  
  // Misc
  ageCalculator, dateDifference, timeDuration, lengthConverter, weightConverter, tempConverter
];

export const getCalculator = (id: string) => calculators.find(c => c.id === id);