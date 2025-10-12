export interface Product {
  id: number;
  name: string;
  type: "Orthotic" | "Prosthetic";
  sizes: string[];
  price: string;
  description?: string;
  image: string;
}

export const exampleProducts: Product[] = [
  {
    id: 1,
    name: "Bil KAFO Splint orthoplast",
    type: "Orthotic",
    sizes: ["S", "M", "L", "XL"],
    price: "ر.س xyz",  // Approximate conversion from ₹2000
    image: "https://img1.wsimg.com/isteam/ip/ec31fc0e-619a-46bc-9b53-b20f5f0533c2/Bil%20KAFO%20Splint%20orthoplast%20custom%20made...jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:719,h:719",
  },
  {
    id: 2,
    name: "Below Knee Prosthesis",
    type: "Prosthetic",
    sizes: ["M", "L"],
    price: "ر.س xyz",  // Approximate conversion from ₹8000
    image: "https://img1.wsimg.com/isteam/ip/ec31fc0e-619a-46bc-9b53-b20f5f0533c2/blob-0004.png/:/rs=w:719,h:719",
  },
  {
    id: 3,
    name: "Ankle Foot Orthosis",
    type: "Orthotic",
    sizes: ["M", "L", "XL"],
    price: "ر.س xyz",  // Approximate conversion from ₹3500
    image: "https://img1.wsimg.com/isteam/ip/ec31fc0e-619a-46bc-9b53-b20f5f0533c2/blob-0005.png/:/",
  },
  {
    id: 4,
    name: "Upper Limb Prosthetic",
    type: "Prosthetic",
    sizes: ["One Size"],
    price: "ر.س xyz",  // Approximate conversion from ₹12000
    image: "https://img1.wsimg.com/isteam/ip/ec31fc0e-619a-46bc-9b53-b20f5f0533c2/Mini%20Rigo%20Cheneau%20Spinal%20Jacket%20-%20Custom%20Made.png/:/rs=w:719,h:719",
  },
  {
    id: 5,
    name: "Wrist-Hand Orthosis",
    type: "Orthotic",
    sizes: ["S", "M", "L"],
    price: "ر.س xyz",  
    image: "https://img1.wsimg.com/isteam/ip/ec31fc0e-619a-46bc-9b53-b20f5f0533c2/Arch%20Orthotic%20Support%20Shell%20Insole%20-%20Custom%20ma.png/:/",
  },
  {
    id: 6,
    name: "Hip Prosthesis",
    type: "Prosthetic",
    sizes: ["M", "L"],
    price: "ر.س xyz",  
    image: "https://img1.wsimg.com/isteam/ip/ec31fc0e-619a-46bc-9b53-b20f5f0533c2/Hind%20Foot%20Dafo%20-%20custom%20made%20Butterfly%20Design..jpg/:/rs=w:719,h:719",
  },
  {
    id: 7,
    name: "Knee Ankle Foot Orthosis",
    type: "Orthotic",
    sizes: ["M", "L"],
    price: "ر.س xyz",  
    image: "/KneeAnkleFootOrthosis.png",
  },
  {
    id: 8,
    name: "Dynamic Ankle Foot Orthosis",
    type: "Orthotic",
    sizes: ["M", "L"],
    price: "ر.س xyz",
    image: "/DynamicAnkleFootOrthosis.png",
  },
  {
    id: 9,
    name: "Phocomelia-Lower Limb Prosthesis",
    type: "Prosthetic",
    sizes: ["M", "L"],
    price: "ر.س xyz",  
    image: "/Phocomelia-LowerLimbProsthesis.png",
  },
  {
    id: 10,
    name: "Scoli brace",
    type: "Prosthetic",
    sizes: ["M", "L"],
    price: "ر.س xyz",  
    image: "/Scolibrace.png",
  },
  {
    id: 11,
    name: "DAFO Mini-Butterfly design",
    type: "Prosthetic",
    sizes: ["M", "L"],
    price: "ر.س xyz",  
    image: "/DAFOMini-Butterflydesign.png",
  },
  {
    id: 12,
    name: "AFO - Turbo",
    type: "Orthotic",
    sizes: ["M", "L"],
    price: "ر.س xyz",  
    image: "/AFO-Turbo.png",
  },
  {
    id: 13,
    name: "Hand splint with thumb splitter",
    type: "Orthotic",
    sizes: ["M", "L"],
    price: "ر.س xyz",  
    image: "/Handsplintwiththumbsplitter.png",
  },
  {
    id: 14,
    name: "Above Knee Prosthesis Bil",
    type: "Prosthetic",
    sizes: ["M", "L"],
    price: "ر.س xyz",  
    image: "/AboveKneeProsthesisBil.png",
  },
  {
    id: 15,
    name: "Cosmetic Silicon Partial Foot",
    type: "Prosthetic",
    sizes: ["M", "L"],
    price: "ر.س xyz",  
    image: "/CosmeticSiliconPartialFoot.png",
  },
  {
    id: 16,
    name: "Spinal Jacket with chest Relief",
    type: "Orthotic",
    sizes: ["M", "L"],
    price: "ر.س xyz",  
    image: "/SpinalJacketwithchestRelief.png",
  },
  {
    id: 17,
    name: "E-MAG",
    type: "Prosthetic",
    sizes: ["M", "L"],
    price: "ر.س xyz",  
    image: "/E-MAG.png",
  },
  {
    id: 18,
    name: "DAFO with TAMARACK ANKLE JOINT",
    type: "Prosthetic",
    sizes: ["M", "L"],
    price: "ر.س xyz",  
    image: "/DAFO with TAMARACK ANKLE JOINT.png",
  },
  {
    id: 19,
    name: "Flooreaction",
    type: "Orthotic",
    sizes: ["M", "L"],
    price: "ر.س xyz",  
    image: "/Flooreaction.png",
  },
  {
    id: 20,
    name: "Genu varum Orthosis",
    type: "Prosthetic",
    sizes: ["M", "L"],
    price: "ر.س xyz",  
    image: "/GenuvarumOrthosis.png",
  },
  {
    id: 21,
    name: "Ankle",
    type: "Prosthetic",
    sizes: ["M", "L"],
    price: "ر.س xyz",  
    image: "/ankle.png",
  },
  {
    id: 21,
    name: "DAFO Turbo",
    type: "Orthotic",
    sizes: ["M", "L"],
    price: "ر.س xyz",  
    image: "/DAFOTurbo.png",
  },
];
