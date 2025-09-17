export default function Card({title, text}){
  return (
<article className="card">
<h3>{title}</h3>
<p>{text}</p>
</article>
  );
}