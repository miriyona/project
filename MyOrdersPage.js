import Nav from './Nav';
import CollapsibleTable from './CollapsibleTable';

export default function MyOrdersPage() {
    return (
        <>
            <Nav></Nav>
            {/* <div style={{margin:"auto",borderColor:"black"}}>  
               <label>הזמנה לבנה אומרת: הזמנתכם מחכה ליומה</label>
               <label style={{color:"white",backgroundColor:"lightGreen",display:"inline-block"}}>הזמנה ירוקה אומרת: הזמנתכם אושרה</label>
               <label style={{color:"white",backgroundColor:"pink",display:"inline-block"}}>הזמנה אדומה אומרת: הזמנתכם אינה אושרה</label>
               <label style={{color:"white",backgroundColor:"lightGray",display:"inline-block"}}>הזמנה אפורה אומרת: הזמנתכם נעשתה או בוטלה</label>
            </div> */}
            <CollapsibleTable></CollapsibleTable>
        </>
    );
}