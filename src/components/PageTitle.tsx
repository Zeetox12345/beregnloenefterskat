interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className="bg-primary/10 py-3">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-xl md:text-2xl font-semibold text-primary">
          {title}
        </h1>
      </div>
    </div>
  );
}; 