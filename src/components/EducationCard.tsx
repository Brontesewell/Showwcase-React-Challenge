import React from "react";
import {
  deleteStudy
} from '../actions/showwcaseActions';
import { connect } from 'react-redux'
import styled from 'styled-components'
import { color, ColorProps, space } from 'styled-system'


interface IProps {
  selectedEducation: any,
  deleteStudy: typeof deleteStudy,
  clearSelectedEducation: any
}

function EducationCard (props: IProps) {
  
  const EducationCard = styled.div`
    padding: 10px;
  `;

  const Title = styled.h1`
    font-weight: bold;
  `;

  const StartEndYear = styled.h4`
    font-weight: 350;
  `;

  const Grade = styled.h4`
    font-weight: 400;
  `;

  const AwardTitle = styled.h4`
    margin-top: 1%;
    padding-top: 1rem
  `;

  const AwardDiv = styled.div`
      min-width: 105px;
      float: left;
      ${space}
  `;

  const Description = styled.p`
    padding-top: 2rem
    margin-bottom: 5%;
    text-align: justify;
  `;

  const Button = styled.button<ColorProps>`
  ${color}
  `

  const deleteClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> {
    event.preventDefault();
    props.deleteStudy(props.selectedEducation)
    props.clearSelectedEducation()
  }

  const {school, degree, grade, description, startYear, awards, endYear} = props.selectedEducation
  return (
    <EducationCard>

    <Title>{degree} at {school}</Title>

    <StartEndYear>{startYear} - {endYear}</StartEndYear>

     <Grade><strong>Average Grade:</strong> {grade} </Grade>

    <AwardTitle>Awards: </AwardTitle> {awards.map((a: any) => <ul> <li>{a.text}</li></ul>)} 
    
     
    <Description><strong>Description:</strong> {description}</Description>


    <Button type="submit" color="white" bg="black" className="button" onClick={deleteClick}>Delete</Button>
    
    </EducationCard>
  );
};

const mapStateToProps = (state: any) => ({
  selectedEducation: state.showwcase.selectedEducation
});


export default connect(mapStateToProps, {deleteStudy})(EducationCard);