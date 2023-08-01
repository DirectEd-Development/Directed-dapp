import React, {useState} from 'react'
import Image from 'next/image'
import MilestoneProgressBar from '../MilestoneProgressBar/MilestoneProgressBar'
import {AiOutlineDown, AiOutlineUp, AiFillGithub, AiOutlineWhatsApp, AiFillLinkedin} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import {BiSun} from 'react-icons/bi'
import {CiLocationOn} from 'react-icons/ci'
type StudentMilestoneProps = {
	first_name: string
	last_name: string
	pseudonym: string
	milestone: number
}

const StudentMilestone = ({
	first_name,
	last_name,
	pseudonym,
	milestone,
}: StudentMilestoneProps) => {
	const imageStyle = {
		borderRadius: '50%',
		border: '1px solid #fff',
	  }

const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen((prev) => !prev);
  };

  function splitPseudonym(pseudonym:string) {
	const words = [];
	let currentWord = "";
  
	for (let i = 0; i < pseudonym.length; i++) {
	  const char = pseudonym[i];
	  if (char === char.toUpperCase() && currentWord !== "") {
		words.push(currentWord);
		currentWord = char;
	  } else {
		currentWord += char;
	  }
	}
  
	if (currentWord !== "") {
	  words.push(currentWord);
	}
  
	return words.join(" ");
  }
	return (
	
		<div className='student-milestone'>
			{/*HEAD, all items in the gead to be siplayed inline. */}
			<div className="head"
			onClick={
				toggleAccordion
			}
			>
				
				<div className="_image">
				<Image
						src={'https://drive.google.com/uc?id=1963abLb1o1rbjVX-LaifIkOE4ax0tmoN'}
						alt='student'
						width={50}
						height={50}
						style={imageStyle}
						/>
				</div>
				<div className="_name">
					<p>{splitPseudonym(pseudonym)}</p>
				</div>
				<MilestoneProgressBar
					milestoneNumber={
							milestone
					}
				 />

				 <div className="_view">
					<p>view more</p>
					{isAccordionOpen ? <AiOutlineUp size={15} /> : <AiOutlineDown size={15} />}

				 </div>
			
			</div>
			{/*BODY, should only be visible when the accordion is open*/}
			{
		isAccordionOpen &&
			<div className="_body">
				{/*Location and contents to be flex row with contents taking like 70%*/ }

				<div className="_location">
					<CiLocationOn size={12}/>
					<p>Naivasha Kenya</p>
				</div>
				<div className="_contents">
					<div className="_icons">
						{/*Icons to be displayed inline: github, cardano, whatsapp, telegram, linkedIn*/}
						<a href=""><AiFillGithub size={15}/></a>
						<a href=""><BiSun size={15}/></a>
						<a href=""><AiOutlineWhatsApp size={15}/></a>
						<a href=""><BsTelegram size={15}/></a>
						<a href=""><AiFillLinkedin size={15}/></a>

					</div>
					<div className="student-milestone-description">
						<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quidem labore nesciunt dolorem? Cumque, expedita delectus dolore ex dolor numquam, illo laudantium, est ad facilis accusantium excepturi non earum? Placeat.

						</p>
					</div>
				</div>
			</div>
						}

			</div>
	)
}

export default StudentMilestone
