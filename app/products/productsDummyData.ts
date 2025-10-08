export interface Product {
  id: number;
  name: string;
  type: "Orthotic" | "Prosthetic";
  sizes: string[];
  price: string;
  image: string;
}

export const exampleProducts: Product[] = [
  {
    id: 1,
    name: "Knee Orthosis",
    type: "Orthotic",
    sizes: ["S", "M", "L", "XL"],
    price: "ر.س 100",  // Approximate conversion from ₹2000
    image: "https://img1.wsimg.com/isteam/ip/ec31fc0e-619a-46bc-9b53-b20f5f0533c2/Bil%20KAFO%20Splint%20orthoplast%20custom%20made...jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:719,h:719",
  },
  {
    id: 2,
    name: "Below Knee Prosthesis",
    type: "Prosthetic",
    sizes: ["M", "L"],
    price: "ر.س 400",  // Approximate conversion from ₹8000
    image: "https://img1.wsimg.com/isteam/ip/ec31fc0e-619a-46bc-9b53-b20f5f0533c2/blob-0004.png/:/rs=w:719,h:719",
  },
  {
    id: 3,
    name: "Ankle Foot Orthosis",
    type: "Orthotic",
    sizes: ["M", "L", "XL"],
    price: "ر.س 175",  // Approximate conversion from ₹3500
    image: "https://img1.wsimg.com/isteam/ip/ec31fc0e-619a-46bc-9b53-b20f5f0533c2/blob-0005.png/:/",
  },
  {
    id: 4,
    name: "Upper Limb Prosthetic",
    type: "Prosthetic",
    sizes: ["One Size"],
    price: "ر.س 600",  // Approximate conversion from ₹12000
    image: "https://img1.wsimg.com/isteam/ip/ec31fc0e-619a-46bc-9b53-b20f5f0533c2/Mini%20Rigo%20Cheneau%20Spinal%20Jacket%20-%20Custom%20Made.png/:/rs=w:719,h:719",
  },
  {
    id: 5,
    name: "Wrist-Hand Orthosis",
    type: "Orthotic",
    sizes: ["S", "M", "L"],
    price: "ر.س 125",  // Approximate conversion from ₹2500
    image: "https://img1.wsimg.com/isteam/ip/ec31fc0e-619a-46bc-9b53-b20f5f0533c2/Arch%20Orthotic%20Support%20Shell%20Insole%20-%20Custom%20ma.png/:/",
  },
  {
    id: 6,
    name: "Hip Prosthesis",
    type: "Prosthetic",
    sizes: ["M", "L"],
    price: "ر.س 750",  // Approximate conversion from ₹15000
    image: "https://img1.wsimg.com/isteam/ip/ec31fc0e-619a-46bc-9b53-b20f5f0533c2/Hind%20Foot%20Dafo%20-%20custom%20made%20Butterfly%20Design..jpg/:/rs=w:719,h:719",
  },
];
