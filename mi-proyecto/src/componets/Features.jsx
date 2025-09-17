import Card from "./Card";
 
export default function Features(){
  const items = [
    {title: "Ingredientes frescos", text: "Compramos local."},
    {title: "Delivery rápido", text: "En menos de 30 min."},
    {title: "Ambiente familiar", text: "Música y mesas cómodas."}
  ];
 
  return (
<section className="features container">
      {items.map((it, i) => <Card key={i} {...it} />)}
</section>
  );
}