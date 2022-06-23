const pictures = [
  "https://images.unsplash.com/photo-1655834648155-f7a98ff3c49d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1655930119994-a152be4f1df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1655816692524-9e4e140cb340?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1655962866768-6c8a110c2ba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1655958632569-7800df8b203b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1655910299073-9efb4ae052f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1655826526409-6dd68d56cd78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80",
  "https://images.unsplash.com/photo-1655853083902-62fda4a0eeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1976&q=80",
]

const greetings = [
  "Get Inspired",
  "Time for Reflection",
  "Write Down Your Day",
  "Look Within",
  "Slow Down And Reflect",
  "How Are You?",
  "Catch Your Breath",
]

export default function Home({fname, lname}) {
  return (
    <div className="container">
      <h1>Greetings {fname} {lname}!</h1>
      <h4>{greetings[Math.floor(Math.random() * 7)]}</h4>
      <img
        src={pictures[Math.floor(Math.random() * 8)]}
        alt="get inspired or motivated!"
        width="50%"
      />
    </div>
  )
}