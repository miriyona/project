import Nav from './Nav';
import './Design.css';

export default function SetOfRules() {

    return (
        <>
            <Nav></Nav>
            <p className="qx">
                <h2>"DriveWay" תודה שבחרתם לחנות עם האפליקציה </h2>
                <h3>:תעריפי החניה אצלנו</h3>
                <h5> תוכלו להזמין חניה מראש, כדי לבטח את מקומכם :) והמחיר</h5>
                .אם הרכב שלכם הוא גדול-המחיר 16ש"ח לחצי שעה
                <br></br>
                .אם הרכב שלכם הוא קטן-המחיר 15ש"ח לחצי שעה
                <h5>תוכלו להזמין חניה יום קודם, בתקווה שיש מקום- המחיר</h5>
                .אם הרכב שלכם הוא גדול-המחיר 11ש"ח לחצי שעה
                <br></br>
               .אם הרכב שלכם הוא קטן-המחיר 10ש"ח לחצי שעה
                <h5>.חניה מיידית אפשרית עד חצי שעה והיא בחינם אם מונה החניות מורה על פנוי</h5>
                <h4>בעמוד הזמנות תהיה רשימת ההזמנות שהזמנתם. והצבע של כל הזמנה מסביר מה הסטטוס שלה</h4>
                <label>הזמנה לבנה אומרת: הזמנתכם מחכה ליומה</label>
                <br></br>
                <label style={{ color: "white", backgroundColor: "lightGreen", display: "inline-block" }}>הזמנה ירוקה אומרת: הזמנתכם אושרה</label>
                <br></br>
                <label style={{ color: "white", backgroundColor: "pink", display: "inline-block" }}>הזמנה אדומה אומרת: הזמנתכם אינה אושרה</label>
                <br></br>
                <label style={{ color: "white", backgroundColor: "lightGray", display: "inline-block" }}>הזמנה אפורה אומרת: הזמנתכם נעשתה או בוטלה</label>
            </p>
        </>
    );
}