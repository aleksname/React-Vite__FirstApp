function ReturnElementLi({title, description}){
    // console.log({title, description});
    return(
      <li className='section_li'>
          <p className='section_p'>
            <strong>{title}</strong> {description}
          </p>
      </li>
    )
  }

export default ReturnElementLi