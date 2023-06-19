const TrimUrl = () => {
  return (
    <section>
      <div>
        <form>
          <input type="text" placeholder="Paste URL here..." />
          <select name="" id="">
            <optgroup>
              <option value="">Enter Domain</option>
              <option value="scissors.com">Scissors.com</option>
              <option value="Add Domain">Add Domain</option>
            </optgroup>
          </select>
          <input type="text" placeholder="Type alias here" />
          <button>Trim URL</button>
        </form>
        <p>
          By clicking TrimURL, I agree to the Terms of Service, Privacy Policy
          and Use of Cookies.
        </p>
      </div>
    </section>
  );
};

export default TrimUrl;
