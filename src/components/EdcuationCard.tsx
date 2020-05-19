// import React from "react";
// // import {
// //   deleteStudy
// // } from '../actions/showwcaseActions';
// import { connect } from 'react-redux'
// import styled from 'styled-components'
// import { space } from 'styled-system'


// interface IProps {
//   selectedEducation: Object
// }

// const EducationCard: FC<IProps> = ({ selectedEducation }: IProps) => {
  
//   const EducationCard = styled.div`
//     padding: 10px;
//   `;

//   const Title = styled.h1`
//     font-weight: bold;
//   `;

//   const StartEndYear = styled.h4`
//     font-weight: 350;
//   `;

//   const Grade = styled.h4`
//     font-weight: 400;
//   `;

//   const AwardTitle = styled.h4`
//     margin-top: 1%;
//   `;

//   const AwardDiv = styled.div`
//       min-width: 105px;
//       float: left;
//       ${space}
//   `;

//   const Description = styled.p`
//     margin-top: 10%;
//     margin-bottom: 5%;
//   `;

//   // const deleteClick = (event)=> {
//   //   event.preventDefault();
//   //   props.deleteStudy(props.selectedEducation)
//   //   props.clearSelectedEducation()
//   // }

//   const {school, degree, grade, description, startyear, awards, endyear} = props.selectedEducation
//   return (
//     <EducationCard>

//     <Title>{degree} at {school}</Title>

//     <StartEndYear>{startyear} - {endyear}</StartEndYear>

//      <Grade><strong>Average Grade:</strong> {grade} </Grade>

//     <AwardTitle>Awards: </AwardTitle> {awards.map(a => <AwardDiv mt={-20}><ul> <li>{a.text}</li></ul></AwardDiv>)}
    
//     <Description><strong>Description:</strong> {description}</Description>
    
    
//     <button className="button" onClick={deleteClick}>Delete</button>
//     </EducationCard>
//   );
// };

  
// const mapDispatchToProps = dispatch => {
//   return {
//     deleteStudy: (user) => dispatch(deleteStudy(user))
//   }
// }


// export default connect(null, mapDispatchToProps)(EdcuationCard);