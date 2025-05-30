export interface IMedicine{
    name:string;
    description:string;
    price:number;
    stock:number;
    prescriptionRequired:boolean;
    manufacturer:string;
    expiryDate:Date;
    category:TMedicineCategory;
    symptoms:string[];
    image:string;
    _id:string;
    createdAt:string;
    updatedAt:string;
}

export type TMedicineCategory = 
  | "Pain Relief"
  | "Antibiotics"
  | "Vitamins & Supplements"
  | "Cold & Flu"
  | "Digestive Health"
  | "Skin Care"
  | "Women's Health"
  | "Men's Health"
  | "Baby Care"
  | "Oral Care"
  | "Hair Care"
  | "Eye Care"
  | "Allergy Relief"
  | "Mental Health"
  | "Immunity Support"
  | "Diabetes Care"
  | "Heart Health"
  | "Joint & Muscle Support"
  | "First Aid"
  | "Anti-fungal"
  | "Respiratory Health"
  | "Cough & Throat"
  | "Weight Loss & Diet"
  | "Pet Care"
  | "Herbal Remedies"
  | "Personal Care & Hygiene"
  | "Sexual Wellness"
  | "Homeopathy";



 export  const MedicineCategories: TMedicineCategory[] = [
    "Pain Relief",
    "Antibiotics",
    "Vitamins & Supplements",
    "Cold & Flu",
    "Digestive Health",
    "Skin Care",
    "Women's Health",
    "Men's Health",
    "Baby Care",
    "Oral Care",
    "Hair Care",
    "Eye Care",
    "Allergy Relief",
    "Mental Health",
    "Immunity Support",
    "Diabetes Care",
    "Heart Health",
    "Joint & Muscle Support",
    "First Aid",
    "Anti-fungal",
    "Respiratory Health",
    "Cough & Throat",
    "Weight Loss & Diet",
    "Pet Care",
    "Herbal Remedies",
    "Personal Care & Hygiene",
    "Sexual Wellness",
    "Homeopathy"
  ];