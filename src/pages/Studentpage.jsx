import HeaderContainer from './pages/HeaderContainer';
import FormContainer from './pages/FormContainer.jsx';
import ListContainer from './pages/ListContainer';

const Studentpage = () =>{
    const Student = [

        { id: 1, name: "Nenya", age: 18, course: "Cumputer Science"},
        { id: 2, name: "Kerstine", age: 18, course: "Public Administrator"},
        { id: 3, name: "Owna", age: 18, course: "Political Scinence"}
    ];

    return (
        <>
        
         <HeaderContainer />
         <FormContainer />
         <ListContainer data = {Student}/>

    
        </>
    )
}
export default Studentpage;