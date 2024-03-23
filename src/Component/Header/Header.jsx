import rasm from "../../images/png.jpg";
const Header = () => {
  return (
    <>
      <div className="header w-[100%] h-[100vh] bg-slate-300">
        <div className="header-inner w-[100%] h-[100vh] container mx-auto flex items-center justify-center">
          <div className="headaer-text w-[550px] h-[380px]  flex flex-col items-center justify-center gap-4 border-t-8 border-black bg-slate-200">
            <img src={rasm} alt="" className="rounded-full w-[100px]" />
            <h1 className="text-[30px] text-[#123456]">
              Namangan Davlat Universiteti
            </h1>
            <h3 className="text-[20px] text-[#123456]">
              HIMES Student axborot tizimi
            </h3>
            <div className="one w-[70%] border-b-2 border-[#515152]   flex items-center gap-2 pl-[10px] pr-[10px] ">
              <input
                type="text"
                className="w-[95%] pl-[5px] rounded-[10px] bg-transparent"
                placeholder="Talaba ID"
              />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="one w-[70%] border-b-2 border-[#515152]  flex items-center gap-2 pl-[10px] pr-[10px]">
              <input
                type="password"
                className="w-[95%] pl-[5px] rounded-[10px] bg-transparent"
                placeholder="Parol"
              />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div className="line flex justify-between w-[100%] border-t-2 border-black pt-[10px] pl-[10px] pr-[10px]">
              <div className="input flex gap-1 justify-center items-center">
                <input type="checkbox" />
                <p>Eslab qolish</p>
              </div>
              <button className="w-[200px] border bg-[#123456] cursor-pointer p-[3px] text-white">
                Kirish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
