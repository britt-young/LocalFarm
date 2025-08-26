const Terms = () => {
  const effectiveDate = "August 26, 2025";
  const lastUpdated = "August 26, 2025";
  const farmName = "Local Farm";

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <header className="mb-10">
        <h2 className="text-gray-900">Terms & Conditions</h2>
        <p className="mt-2 text-sm text-gray-500">
          <span className="font-medium">Effective Date:</span> {effectiveDate}{" "}
          <br />
          <span className="font-medium">Last Updated:</span> {lastUpdated}
        </p>
      </header>

      <section className="space-y-8 text-gray-700">
        <p>
          Welcome to {farmName}! These Terms & Conditions (“Terms”) govern your
          use of our website, participation in events or camps, and purchase of
          products. By accessing our site or services, you agree to these Terms.
        </p>

        <div>
          <h4 className="text-gray-900">1. Use of Website & Services</h4>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              You agree to use our website and services only for lawful
              purposes.
            </li>
            <li>
              You may not attempt to disrupt or interfere with the security or
              functionality of our website.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900">2. Purchases & Payments</h4>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              All purchases are subject to availability. Prices are listed in
              USD unless otherwise noted.
            </li>
            <li>
              Payments must be made at the time of order using our approved
              payment methods.
            </li>
            <li>
              We reserve the right to refuse or cancel any order in cases of
              suspected fraud or error.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900">3. Events & Camps</h4>
          <h6 className="mt-1">
            Registration for community events and camps may require providing
            health or emergency contact information. Parents/guardians must
            register minors.
          </h6>
        </div>

        <div>
          <h4 className="text-gray-900">4. Cancellations & Refunds</h4>
          <h6 className="mt-1">
            Refunds or cancellations are subject to our policies, which may vary
            by product, event, or camp. Please contact us for details.
          </h6>
        </div>

        <div>
          <h4 className="text-gray-900">5. Intellectual Property</h4>
          <h6 className="mt-1">
            All content on this site—including text, images, and logos—is the
            property of {farmName} and may not be used without permission.
          </h6>
        </div>

        <div>
          <h4 className="text-gray-900">6. Limitation of Liability</h4>
          <h6 className="mt-1">
            {farmName} is not liable for any damages arising from the use of our
            site, products, or events, except as required by law.
          </h6>
        </div>

        <div>
          <h4 className="text-gray-900">7. Changes to These Terms</h4>
          <h6 className="mt-1">
            We may update these Terms occasionally. The most recent version will
            always be posted here with the “Last Updated” date.
          </h6>
        </div>

        <div>
          <h4 className="text-gray-900">8. Contact Us</h4>
          <address className="mt-3 not-italic">
            <div className="font-medium">{farmName}</div>
            <div>1234 Main St, Tallahassee, FL 32301</div>
            <div>+1 (800) 123-4567</div>
            <div>
              <a className="underline" href="mailto:info@localfarm.com">
                info@localfarm.com
              </a>
            </div>
          </address>
        </div>
      </section>
    </main>
  );
};

export default Terms;
