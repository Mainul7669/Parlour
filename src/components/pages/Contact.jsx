import FormHook from "../Shared/FormHook";

function Contact() {
  return (
    <div id='contact'>
      <div className="bg-[#FFF8F5] flex-wrap justify-center gap-4 p-4 ">
      <h1 className="text-[34px] text-center font-bold mt-10 text-[#111430]">
        Let us handle your <br /> project, professionally.
      </h1>

      <FormHook/>
    </div>
    </div>
  );
}

export default Contact;
