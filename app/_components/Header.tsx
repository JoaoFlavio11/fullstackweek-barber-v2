import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { MenuIcon} from "lucide-react";


const Header = () => {
  return ( 
    <Card>
      <CardContent className="p-5 justify-between items-center flex flex-row">
        <Image src="/logo.png" alt="Logo" height={18} width={120}/>

        <Button size="icon" variant="outline">
          <MenuIcon/>
        </Button>
      </CardContent>
    </Card> 
  );
}
 
export default Header;