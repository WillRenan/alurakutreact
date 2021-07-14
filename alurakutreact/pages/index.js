import styled from 'styled-components';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function  ProfileSideBar(props){
  return(
    <Box >
    <img src={`https://github.com/${props.gitHubUser}.png`} style={{ borderRadius :'8px'}} alt="" />
  </Box>
  )
}

export default function Home() {
  const gitHubUser= 'WillRenan';
  const favoritePeoples = [
    'WillRenan',
    'rafaballerini',
    'pablooliveira01',
    'victoriafe',
    'petroniocandido',
    'maxwillias'
  ]
  
  return(
    <>
    <AlurakutMenu/>
    <MainGrid> 
      <div className = "profileArea" style={{gridArea: 'profileArea'}}>
       <ProfileSideBar gitHubUser = {gitHubUser}/>
      </div>

      <div className = "welcomeArea" style={{gridArea: 'welcomeArea'}}>
        <Box >
          <h1 className= "title">
            Bem-vindo(a)
          </h1>
          <OrkutNostalgicIconSet/>
        </Box>
      </div>

      <div className = "profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper >
          <h2 className="smallTitle">
            Pessoas da Comunidade({favoritePeoples.length})
          </h2>
          

          <ul>
            {favoritePeoples.map(( peoples)=>{
              return(
                <li>
                  <a href={`/users/${peoples}`} key = {peoples}>
                    <img src={`https://github.com/${peoples}.png`} alt="" />
                    <span>{ peoples }</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>
    );
}
