import SubTittle from "./Subtittle";

interface TittleProps {

    // titulo props
    TittleText: string;
    TittleTextColor?: string;
    TittleTextSize?: "text-xs" | "text-sm" | "text-md" | "text-lg" | "text-xl" | "text-2xl" | "text-3xl" | "text-4xl" | "text-5xl";
    TittleResponsiveTextSize?: string;
    TittleTextAlign?: "text-left" | "text-center" | "text-right";
    TittleFontWeight?: "font-thing" | "font-light" | "font-normal" | "font-medium" | "font-semibold" | "font-bold" | "font-extrabold" | "font-black";
    TittleFontFamily?: string;
    TittleUnderline?: boolean;
    TittleClassName?: string;

    // sub titulo props
    SubTittleText: string;
    SubTittleTextColor?: string;
    SubTittleTextSize?: "text-xs" | "text-sm" | "text-md" | "text-lg" | "text-xl" | "text-2xl" | "text-3xl" | "text-4xl" | "text-5xl";
    SubTittleTextAlign?: "text-left" | "text-center" | "text-right";
    SubTittleFontWeight?: "font-thing" | "font-light" | "font-normal" | "font-medium" | "font-semibold" | "font-bold" | "font-extrabold" | "font-black";
    SubTittleFontFamily?: string;
    SubTittleUnderline?: boolean;
    SubTittleClassName?: string;

    // Otros props
    Descripcion: boolean;
    DescripcionText?: string;
    DescripcionTextColor?: string;
    DescripcionTextSize?: "text-xs" | "text-sm" | "text-md" | "text-lg" | "text-xl" | "text-2xl" | "text-3xl" | "text-4xl" | "text-5xl";
    DescripcionTextAlign?: "text-left" | "text-center" | "text-right";
    DescripcionFontWeight?: "font-thing" | "font-light" | "font-normal" | "font-medium" | "font-semibold" | "font-bold" | "font-extrabold" | "font-black";
    DescripcionFontFamily?: string;
    DescripcionUnderline?: boolean;
    DescripcionClassName?: string;
}
export default function Tittle(
    {
        // titulo props
        TittleText,
        TittleTextColor = "text-white",
        TittleTextSize = "text-2xl",
        TittleResponsiveTextSize = "md:text-4xl",
        TittleTextAlign = "text-center",
        TittleFontWeight = "font-bold",
        TittleFontFamily = "",
        TittleUnderline = false,
        TittleClassName = "",

        // sub titulo props
        SubTittleText,
        SubTittleTextColor = "text-cyan-500",
        SubTittleTextSize = "text-md",
        SubTittleTextAlign = "text-center",
        SubTittleFontWeight = "font-bold",
        SubTittleFontFamily = "",
        SubTittleUnderline = false,
        SubTittleClassName = "",
        
        // Otros props
        Descripcion = false,
        DescripcionText,
        DescripcionTextColor = "text-mywhite/60",
        DescripcionTextSize = "text-xs",
        DescripcionTextAlign = "text-center",
        DescripcionFontWeight = "font-bold",
        DescripcionFontFamily = "",
        DescripcionUnderline = false,
        DescripcionClassName = "sm:text-base"
    }: TittleProps
) {
    return (
        <div>
            <SubTittle
                text={SubTittleText}
                textColor={SubTittleTextColor}
                textSize={SubTittleTextSize}
                textAlign={SubTittleTextAlign}
                fontWeight={SubTittleFontWeight}
                fontFamily={SubTittleFontFamily}
                underline={SubTittleUnderline}
                className={SubTittleClassName}
            />
            <h2 className={`
                ${TittleTextAlign} 
                ${TittleTextSize} 
                ${TittleResponsiveTextSize}
                ${TittleFontWeight}
                ${TittleFontFamily}
                ${TittleTextColor}
                ${TittleUnderline ? "underline" : ""}
                ${TittleClassName}
            `}
            >
                {TittleText}
            </h2>

            {/* <p className="text-center text-xs text-mywhite/60 sm:text-base">Comparte tus opiniones y comentarios con nosotros.</p> */}
            {
                Descripcion && (
                    <p className={`
                        ${DescripcionTextAlign} 
                        ${DescripcionTextSize} 
                        ${DescripcionFontWeight}
                        ${DescripcionFontFamily}
                        ${DescripcionTextColor}
                        ${DescripcionUnderline ? "underline" : ""}
                        ${DescripcionClassName}
                    `}
                    >
                        {DescripcionText}
                    </p>
                )
            }
        </div>
    )
}