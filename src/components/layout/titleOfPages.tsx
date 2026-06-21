
type text = {
    title : string
}

export default function TitlePage({
   title
}:  text) {
  return ( <h1>{title}</h1>);
}