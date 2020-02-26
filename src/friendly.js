import React from 'react';
import { IconContext } from 'react-icons';
import { AiFillLike } from 'react-icons/ai';
import { FaShare } from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';


function Avatar(props) {
  var avatarStyle = {
    marginLeft: 17,
    marginTop: 20,
    width: 170,
    height: 170,
    borderRadius: "50%"
  }
  return (
    <div>
      <img
        src={props.img}
        alt="profile pic"
        style={avatarStyle}
      />
    </div>
  );
}

function UserName(props) {
  var nameStyle = {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Arial, Helvetica, sans-serif",
    margin: 20
  }
  return (
    <div>
      <h1 style={nameStyle}>{props.name}</h1>
    </div>
  );
}

var iconStyle = {
  marginLeft: 35
}

function GetConnected() {
  return (
    <IconContext.Provider value={{ color: '', size: '2rem' }}>
      <div>
        <AiFillLike style={iconStyle} />
        <FaShare style={iconStyle} />
        <MdPeople style={iconStyle} />
      </div>
    </IconContext.Provider>
  );
}



const Friendly = (props) => {
  var femalePeopleItem = props.people.filter(function (person) {
    return person.gender === 'female';
  }).map(function (person) {
    var friendlyStyle = {
      display: 'inline-block',
      margin: 20,
      height: 300,
      width: 200,
      padding: 0,
      backgroundColor: "#FFF",
      border: 'solid',
      borderColor: 'red',
      // WebkitFilter: "drop-shadow(0px 0px 5px #555)",
      filter: "drop-shadow(0px 0px 5px #555)"
    }
    return (
      <div key={person.id} style={friendlyStyle}>
        <Avatar img={person.img} />
        <UserName name={person.name} />
        <GetConnected />
      </div>
    );
  })

  var malePeopleItem = props.people.filter(function (person) {
    return person.gender === 'male';
  }).map(function (person) {
    var friendlyStyle = {
      display: 'inline-block',
      margin: 20,
      height: 300,
      width: 200,
      padding: 0,
      backgroundColor: "#FFF",
      border: 'solid',
      borderColor: 'red',
      // WebkitFilter: "drop-shadow(0px 0px 5px #555)",
      filter: "drop-shadow(0px 0px 5px #555)"
    }
    return (
      <div key={person.id} style={friendlyStyle}>
        <Avatar img={person.img} />
        <UserName name={person.name} />
        <GetConnected />
      </div>
    );
  })

  return (
    <div>
      <h1>Males</h1>
      <div>{malePeopleItem}</div>
      <hr />
      <h1>Females</h1>
      <div>{femalePeopleItem}</div>
    </div>
  )
}

export default Friendly;