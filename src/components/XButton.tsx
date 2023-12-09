import { Button } from "@/components/ui/button";

interface IXButton{
  loading:boolean
  onClick:()=>void,
  children:JSX.Element
}

export function XButton({loading,onClick,children}:IXButton) {

  const handleOnClick=()=>{
    onClick()
  }

  return (
    <Button disabled={loading} onClick={handleOnClick}>
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
      {children}
    </Button>
  );
}
