const session = {
    user: null,
    messages: []

}

export default session;

export function Login(){
    session.user = {
        FirstName: 'Bob',
        LastName: 'Smith',
        id: 163
    }
}