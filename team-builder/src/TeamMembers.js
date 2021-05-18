export default function TeamMembers(props){
    const {team} = props;

    if (!team) {
        return <h3>Working fetching your friend&apos;s details...</h3>
      }
      return (
        <div className='container'>
          <h3>{team.firstName} {team.lastName}</h3>
          <p>Email: {team.email}</p>
          <p>Role: {team.role}</p>
        </div>
      )
}