import { Link } from "react-router-dom";

function Switches({ id, name, type, pitch, force }) {
  return (
    <div>
      {/* 이미지 눌렀을 때 link연결하도록 변경 */}
      <Link
        to={`/info/${id}`} // 현재 api로 받은 데이터를 /Info로 넘김
      >
        <div>
          <img src={`${process.env.PUBLIC_URL}/data/${name}.jfif`} alt={name} />
        </div>
      </Link>
      <div>{name}</div>
      <div>{type}</div>
      <div>{pitch}피치</div>
      <div>{force}g</div>
    </div>
  );
}

export default Switches;
