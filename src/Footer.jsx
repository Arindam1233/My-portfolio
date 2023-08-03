import react from "react"
import { faInstagram } from "react-icons/fa";


function Footer(){
    return(
        <div>

<footer  id="footer1">
  <h5 id="lastheading">GET IN TOUCH</h5>
  <h1 id="contactheading">Contact.</h1>
<ul  id="icons">
      <li class="ms-3"><a  href="https://www.instagram.com/sharmarindam1239/"><img  className ="social" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSycbFommPINbhOOQFjyQzv3T1LsD66s3Jn-UEvixg&s" /></a></li>
      <li class="ms-3"><a  href="https://www.linkedin.com/in/arindam-sharma-282160264"><img  className="social" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2CAMAAAAqeZcjAAAAZlBMVEUAAAD////U1NTZ2dkEBAT5+fm/v7/f398ODg7KysqsrKynp6evr6/c3NykpKTq6uq5ublERERUVFQuLi7x8fE3Nzc+Pj5JSUmFhYWSkpIeHh4kJCQYGBhfX19aWlptbW2ampp6enqk8QSsAAAB2klEQVRoge3Y23KCMBAGYBYMiAeCEAVPVd//Jat2qpANTqLJVjv7XxKTb8Cco4jD4XA4HA6H4zubIlYAIp5uKdUUbknJ0KWCTtSSRt31VAC5IWFT0FJSqCtdBVgQsAVm1wRsjtk4vDqaYzYLz47/ho1izM4J2AlmJwRsg9mKgMVfOadQo1pTBdGkvO+zXzRqFC06gyheUannHHIpzp9X5ntC9JJdU1UUSwCH82bZH9NEKpnFk/apEVCkWopb0Vov+t1FV6XoTmzq6D6honU+uRWVaHG6Pl6hzSaIsnZkE72J+1Zqhlq/PG2F/vj6xm1Y1rDV/Inb7uABi3YeZ3Y6pDqen9zYdlgFmIVi9T2BllMYVhm2t714YR/8jwOx/3u9smA9fP2y1qdUv6wIyiqpBkpsO7M7m7SLels3bWYqtO1Urqy4v8/aUCzHL7Om6Vc1nbqmOcuyLzuy/TUdLRYAhxCstrwt8SJ4DMBKvTZe8S1HrhOLLnEO6CeW51QnFvUXfK0VgkW1N3K4ekAWXwbMR95Zw4yLrtMyu/ni/Vg0OTLL7Gus6VTALLOfx5pP88wy+2ksug5jlllm7Vl0imT2SRbdXt5Z1KRHdoQyXGRo8UF1DofD4XA4nP+Vb1AlHZPpTH9dAAAAAElFTkSuQmCC" /></a></li>
      <li class="ms-3"><a  href="https://github.com/Arindam1233"><img className="social" src="data:image/png;base64,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" /></a></li>
    </ul>
    <p id="email">Email ID: sharmarindam1239@gmail.com</p>
  </footer>
        </div>
    )

}
export default Footer;