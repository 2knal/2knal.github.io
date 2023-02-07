interface ICardWrapperProps {
  customClasses?: string,
  child: React.ReactNode
}

export default function CardWrapper({ customClasses, child }: ICardWrapperProps) {

  let defaultClasses = "relative overflow-hidden bg-cream-100 rounded-2xl transform transition duration-200 hover:scale-[1.015] dark:bg-purple-700";
  if (customClasses) {
    defaultClasses = `${defaultClasses} ${customClasses}`
  }

  return (
    <div className={defaultClasses}>
      {child}
    </div>
  );
}
