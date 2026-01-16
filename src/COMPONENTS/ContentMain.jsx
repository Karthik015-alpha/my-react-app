import CourseApp from "../Course";
import Parent from "../Parent";
import Page from "../page";
import Calculator from "../Calculator";

export default function Content({ activePage }) {
  return (
    <main className="content">
      {activePage === "course" && <CourseApp />}
      {activePage === "parent" && <Parent />}
      {activePage === "page" && <Page />}
      {activePage === "calculator" && <Calculator />}
    </main>
  );
}
