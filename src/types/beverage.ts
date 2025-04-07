interface BaseBeverageType {
  id: string;
  name: string;
  color: string;
}

interface CreamerType {
  id: string;
  name: string;
  color: string;
}

interface SyrupType {
  id: string;
  name: string;
  color: string;
}

interface Option {
  Name: string;
  syrup: SyrupType; 
  creamer: CreamerType; 
  base: BaseBeverageType; 
  temp: string;
}
type BeverageType = {
  id: string;
  name: string;
  temp: string;
  base: BaseBeverageType;
  syrup: SyrupType;
  creamer: CreamerType;
};

export type { Option, BaseBeverageType, CreamerType, SyrupType, BeverageType };
