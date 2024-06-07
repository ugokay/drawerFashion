import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const  ExploreItem = ({item, className, ...props})  => {
    const {title, image} = item


  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid">
        <img src={image} className="h-64"/>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}


export default ExploreItem;