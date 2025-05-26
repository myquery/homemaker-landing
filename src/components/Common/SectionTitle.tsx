// const SectionTitle = ({
//   title,
//   paragraph,
//   width = "570px",
//   center,
//   mb = "100px",
// }: {
//   title: string;
//   paragraph: string;
//   width?: string;
//   center?: boolean;
//   mb?: string;
// }) => {
//   return (
//     <>
//       <div
//         className={`w-full ${center ? "mx-auto text-center" : ""}`}
//         style={{ maxWidth: width, marginBottom: mb }}
//       >
//         <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
//           {title}
//         </h2>
//         <p className="text-base !leading-relaxed text-body-color md:text-lg">
//           {paragraph}
//         </p>
//       </div>
//     </>
//   );
// };

// export default SectionTitle;

import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  titleClass?: string;  // Add this
  paragraphClass?: string;  // Add this
  children?: ReactNode;
}


const SectionTitle = ({
  title,
  paragraph,
  width,
  center,
  mb,
  titleClass = "",
  paragraphClass = "",
  children,
}: SectionTitleProps) => {
  return (
    <div
      className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""} ${
        width ? width : "w-full"
      } ${mb ? mb : "mb-12"}`}
      data-wow-delay=".1s"
    >
      <h2 className={`mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px] ${titleClass}`}>
        {title}
      </h2>
      <p className={`text-base !leading-relaxed text-body-color md:text-lg ${paragraphClass}`}>
        {paragraph}
      </p>
      {children}
    </div>
  );
};

export default SectionTitle;
