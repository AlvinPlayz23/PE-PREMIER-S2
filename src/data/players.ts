export interface Player {
  id: number;
  name: string;
  position: string;
  rating: number;
  price: string;
  team: string;
  imageUrl: string;
  description: string;
}

export const MOCK_PLAYERS: Player[] = [
  {
    id: 1,
    name: 'Abhinav Sandeep',
    position: 'LW, ST, CAM',
    rating: 91,
    price: '0.890',
    team: "Abhi's Team",
    imageUrl: 'https://i.imgur.com/pZyhWQL.jpg',
    description: 'Explosive forward with excellent dribbling skills and clinical finishing ability.'
  },
  {
    id: 2,
    name: 'Jade George',
    position: 'ST, LW, RW',
    rating: 90,
    price: '0.860',
    team: "Neel's Team",
    imageUrl: 'https://i.imgur.com/v60uck9.jpg',
    description: 'Versatile striker with exceptional pace and natural goal-scoring instinct.'
  },
  {
    id: 3,
    name: 'Jonathan Sijo',
    position: 'LW, RW, CF',
    rating: 89,
    price: '0.795',
    team: "Abhi's Team",
    imageUrl: 'https://i.imgur.com/Lj1ybe9.jpg',
    description: 'Dynamic winger with incredible speed and precise crossing ability.'
  },
  {
    id: 4,
    name: 'Reuben',
    position: 'ST, RW, CF',
    rating: 89,
    price: '0.820',
    team: "Neel's Team",
    imageUrl: 'https://i.imgur.com/0knKEXN.jpg',
    description: 'Clinical finisher with excellent positioning and aerial ability.'
  },
  {
    id: 5,
    name: 'Festy',
    position: 'RW, CM',
    rating: 89,
    price: '0.700',
    team: "Neel's Team",
    imageUrl: 'https://i.imgur.com/w3rnU3Q.jpg',
    description: 'Technical midfielder with great vision and passing range.'
  },
  {
    id: 6,
    name: 'Mebin',
    position: 'CM, CF',
    rating: 88,
    price: '0.690',
    team: "Abhi's Team",
    imageUrl: 'https://i.imgur.com/GtA4dHF.jpg',
    description: 'Box-to-box midfielder with excellent shooting ability from range.'
  },
  {
    id: 7,
    name: 'Joshua Iype',
    position: 'CM, CF',
    rating: 88,
    price: '0.690',
    team: "Abhi's Team",
    imageUrl: 'https://i.imgur.com/1Zr2aZg.jpg',
    description: 'Creative playmaker with exceptional ball control and vision.'
  },
  {
    id: 8,
    name: 'Navaneeth',
    position: 'CB, CDM, GK',
    rating: 88,
    price: '0.690',
    team: "Neel's Team",
    imageUrl: 'https://i.imgur.com/fGIkEjV.jpg',
    description: 'Versatile defender with excellent positioning and leadership qualities.'
  },
  {
    id: 9,
    name: 'Alvin',
    position: 'CAM, LW',
    rating: 88,
    price: '0.620',
    team: "Neel's Team",
    imageUrl: 'https://i.imgur.com/8pQpuRv.jpg',
    description: 'Skillful attacking midfielder known for creating chances and key passes.'
  },
  {
    id: 10,
    name: 'Hashly Akash',
    position: 'CM, CAM',
    rating: 88,
    price: '0.625',
    team: "Abhi's Team",
    imageUrl: 'https://i.imgur.com/ssrhMnO.jpg',
    description: 'Technical midfielder with excellent ball control and passing ability.'
  },
  {
    id: 11,
    name: 'Joshua Jekku',
    position: 'CM, CAM',
    rating: 87,
    price: '0.615',
    team: "Abhi's Team",
    imageUrl: 'https://i.imgur.com/HQtIjQd.png',
    description: 'Creative midfielder with exceptional dribbling skills and vision.'
  },
  {
    id: 12,
    name: 'Emmanuel',
    position: 'CB, CM',
    rating: 87,
    price: '0.635',
    team: "Neel's Team",
    imageUrl: 'https://i.imgur.com/XLkvha2.png',
    description: 'Strong defender with excellent tackling ability and aerial presence.'
  },
  {
    id: 13,
    name: 'Cedric Bastin',
    position: 'RB, CDM',
    rating: 87,
    price: '0.630',
    team: "Neel's Team",
    imageUrl: 'https://i.imgur.com/t0xyzxt.png',
    description: 'Versatile defender with great speed and crossing ability.'
  },
  {
    id: 14,
    name: 'Ethen',
    position: 'CB, GK',
    rating: 87,
    price: '0.605',
    team: "Abhi's Team",
    imageUrl: 'https://i.imgur.com/wPEn9aM.png',
    description: 'Reliable defender with excellent positioning and shot-stopping ability.'
  },
  {
    id: 15,
    name: 'Lishanth .G',
    position: 'RW, CDM, CB',
    rating: 87,
    price: '0.625',
    team: "Neel's Team",
    imageUrl: 'https://i.imgur.com/xg6uv8L.jpg',
    description: 'Versatile player with excellent tactical awareness and work rate.'
  },
  {
    id: 16,
    name: 'Kevin Ram',
    position: 'CB, GK, CDM',
    rating: 86,
    price: '0.600',
    team: "Neel's Team",
    imageUrl: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800&auto=format&fit=crop',
    description: 'Solid defender with great reflexes and distribution skills.'
  },
  {
    id: 17,
    name: 'Neel Francis',
    position: 'RW, GK',
    rating: 87,
    price: '0.605',
    team: "Neel's Team",
    imageUrl: 'https://i.imgur.com/EhcBKKx.jpg',
    description: 'Captain of Neels Team.'
  }
];