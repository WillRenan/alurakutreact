import styled from 'styled-components'

/* const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
` */

const Box = styled.div`
  background : #CCC;
  border-radius: 8px;   
`   

export default function Home() {
  return(
    <main> 
      <Box>
        Image
      </Box>
      <Box>
        Bem-vindo  
      </Box>
      <Box>
        Comunidade
      </Box>
    </main>//main
    );
}
