import React from "react";

const Contact = () => {
    return (
        <div class="container my-5 mt-5">
            <h3 class="text-center pt-4 text-primary">Contact us</h3>
            <br />

            <div class="row">
                <div class="col-md-4">
                    <b>Customer service:</b> <br />
                    Phone: +1 129 209 291
                    <br />
                    E-mail:{" "}
                    <a href="mailto:support@mysite.com">support@brand.com</a>
                    <br />
                    <br />
                    <b>Headquarter:</b>
                    <br />
                    Company Inc, <br />
                    Regent Building
                    <br />
                    5th Floor, Sukhumvit 85, Phra Khanong, Bangkok, Thailand
                    <br />
                    Phone: +66 949518054
                    <br />
                    <a href="mailto:thailand@mysite.com">thailand@brand.com</a>
                    <br />
                    <br />
                    <b>Hong kong:</b>
                    <br />
                    Company HK Litd, <br />
                    28/G.908 King
                    <br />
                    Bang Chak District, Hong Kong
                    <br />
                    Phone: +856 965 149 308
                    <br />
                    <a href="mailto:hk@mysite.com">hongkong@brand.com</a>
                    <br />
                </div>

                <div class="col-md-8">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            class="form-control"
                            name="name"
                            required
                            placeholder="Name..."
                        />
                        <br />
                        <input
                            class="form-control"
                            name="phone"
                            required
                            placeholder="Phone..."
                        />
                        <br />
                        <input
                            class="form-control"
                            name="email"
                            placeholder="E-mail..."
                        />
                        <br />
                        <textarea
                            class="form-control"
                            name="text"
                            placeholder="How can we help you?"
                        ></textarea>
                        <br />
                        <input
                            class="btn btn-primary"
                            type="submit"
                            value="Send"
                        />
                        <br />
                        <br />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
