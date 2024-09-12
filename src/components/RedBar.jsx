import styled from "styled-components";
function RedBar(props) {
   console.log(props);
   
    const Container = styled.div`
      .threebars{
         display: flex;
         justify-content: center;
         align-items: center;
         gap: ${props.spc};

      },
        .threebars div{
           width: ${props.wdt};
           height: ${props.hgt};
           background-color: ${props.clr};
        }
    `;

    return(
          <Container >
                
                    <div className="threebars">
                        <div> </div>
                        <div> </div>
                        <div> </div>
                    </div>
                
            </Container>
    );
}
export default RedBar;