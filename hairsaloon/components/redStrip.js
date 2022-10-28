
function RedStrip({data}) {
  return (
    <>
    <section className="bg-light">
        <section className="w-[100%] px-[20px] py-[60px] text-center bg-gold">
          <h2 className="text-[#fff] text-[30px] italic">
              {data.text}
          </h2>
        </section>
      </section>
      </>
  )
}

export default RedStrip