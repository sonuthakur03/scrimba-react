import MenuCategories from "./MenuCategories";
const MenuSections = ({ section }) => {
  return (
    <div>
      <MenuCategories
        key={section.id}
        currency={section.currency}
        categories={section.categories}
      />
    </div>
  );
};

export default MenuSections;
