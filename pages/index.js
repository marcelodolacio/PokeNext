
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Card from '../components/Card';

export async function getStaticProps(){
    const maxPokemons = 151;
    const api = `https://pokeapi.co/api/v2/pokemon/`;

    const res = await fetch(`${api}/?limit=${maxPokemons}`);
  
    const data = await res.json();
    console.log(data,"DATA");

    data.results.forEach((element,index) => {
      element.id = index + 1;
    });

    console.log(data.results,"RESULTS");

    return{
      props:{
        pokemons:data.results
      }
    }

}
export default function Home({pokemons}) {
  return (
   <>
   
    <div className={styles.title_container}>
     <h1 className={styles.title}>Poke<span  className={styles.span}>Next</span></h1>
     <Image src="/images/pokeball.png" width="50" height="50" alt='PokeNext'></Image>
    </div>
    <div className={styles.pokemon_container}>
        {pokemons.map((pokemon)=>(
          <Card pokemon={pokemon}></Card>
        ))}
    </div>
  
   </>
  )
}
