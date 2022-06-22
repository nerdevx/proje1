import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage(props) {
  return (
    <Card>
      <div className="about">
        <h1>Proje Hakkinda</h1>
        <p>React ile olusturulmus basit bir app</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to="/">Geri Don</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
