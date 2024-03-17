import Content from "./Content"
import Sidebar from "./Sidebar"


const HomePage = () => {


  const mainContent = {
    title: 'This is main content',
    detail: 'djfkdsf dshfbhdsf sjdf sdjfb dsbh '
  };
  const sideBar = [
    'About',
    'Contact'
  ];

  return (
    <div className="grid grid-cols-4 divide-x-4 divide-pink-600">
      <Sidebar side={sideBar} />
      <Content main={mainContent} />

    </div>
  )
}
export default HomePage