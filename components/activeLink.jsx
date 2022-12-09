import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()
  const style = {
   
    color: router.asPath === href ? '#02CA82': 'white',
    
    
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return <div>
     <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  

    </div>;
};

export default ActiveLink;