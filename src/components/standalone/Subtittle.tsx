interface SubTittleProps {
    text: string;
    textColor?: string;
    textSize?: "text-xs" | "text-sm" | "text-md" | "text-lg" | "text-xl" | "text-2xl" | "text-3xl" | "text-4xl" | "text-5xl";
    textAlign?: "text-left" | "text-center" | "text-right";
    fontWeight?: "font-thing" | "font-light" | "font-normal" | "font-medium" | "font-semibold" | "font-bold" | "font-extrabold" | "font-black";
    fontFamily?: string;
    underline?: boolean;
    className?: string;
}

export default function SubTittle ({ text, textColor = "text-cyan-500", textSize = "text-md", textAlign = "text-center", fontWeight = "font-semibold", fontFamily = "", underline = false, className = "" }: SubTittleProps) {
    return (
        <p className={`${textAlign} ${textSize} ${fontWeight} ${fontFamily} ${textColor} ${underline ? "underline" : ""} ${className}`}>{text}</p>
    )
}