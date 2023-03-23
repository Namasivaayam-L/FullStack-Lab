import React from 'react'

const MarkList = () => {
  var marks = {
      Sno:Array.from({length:11},(val,idx)=>idx+1),
      CourseCode:['19AD581','19CSA01','19CSP01','19AD501','19AD502','19ADC01','19AD551','19AD552','OCS70','VCS09','19HSM02'],
      CourseName: ['NoSql Databases', 'Internet Programming', 'Free Open Source Software', 'Computer Networking Principles',
                    'Machine Learning Essentials', 'DATA ENGINEERING USING R', 'Computer Networking Laboratory', 'Machine Learning Techniques Laboratory',
                    'Programming, Data Structures and Algorithms using Python', 'AWS Certified Cloud Practitioner ', ' Career Planning and Professional Essentials Laboratory'],
      Credit:[4,3,3,3,3,3,1.5,1.5,1,1,1],
      Internal:[81,90,90,82,79,84,98,92,-1,-1,94],
      Grade:['A','A+','A+','A','A','A','O','A+','A+','A','A+'],
      YOA:['NOV2022','NOV2022','NOV2022','NOV2022','NOV2022','NOV2022','NOV2022','NOV2022','NOV2022','NOV2022','NOV2022'],
      YOP:['NOV2022','NOV2022','NOV2022','NOV2022','NOV2022','NOV2022','NOV2022','NOV2022','NOV2022','NOV2022','NOV2022'],
      ResultStatus:['Pass','Pass','Pass','Pass','Pass','Pass','Pass','Pass','Pass','Pass','Pass']
  }
  return (
    React.createElement('div', {},
        React.createElement('table', {border:'1px solid black'},
            marks.Sno.map((idx) => (
                React.createElement('tr', {},
                    Object.keys(marks)
                        .map((key) => (
                            React.createElement('td', {padding:'0px 20px'},
                            <p> {marks[key][idx-1]} </p>
                        )
                    ))
                )
            ))
        )
    )
  )
}

export default MarkList