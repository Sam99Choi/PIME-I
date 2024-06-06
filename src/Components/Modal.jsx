import VideoComponent from "@/Components/VideoComponent";

export default function Modal({ isOpen }) {
  if (isOpen) {
    return (
      <div className=" w-20 h-20 bg-black ">
        <VideoComponent />
      </div>
    );
  } else {
    return <></>
  }
}
