import { Button } from "@/components/ui/button";

export function XButton({loading,onClick,children}) {

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
