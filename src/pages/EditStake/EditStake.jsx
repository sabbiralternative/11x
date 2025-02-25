import { useForm } from "react-hook-form";
import { useEditButtonValuesMutation } from "../../redux/features/events/events";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const EditStake = () => {
  const [editButtonValue] = useEditButtonValuesMutation();
  const navigate = useNavigate();
  const stakes = JSON.parse(localStorage.getItem("buttonValue"));
  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      buttonGameValues: stakes,
    },
  });

  const buttonGameValues = watch("buttonGameValues");

  const onSubmit = async () => {
    const payload = {
      game: buttonGameValues?.map((btn) => ({
        label: parseFloat(btn?.value),
        value: parseFloat(btn?.value),
      })),
    };

    const res = await editButtonValue(payload).unwrap();
    if (res.success) {
      toast.success(res?.result?.message);
      localStorage.removeItem("buttonValue");
      const gameButtonsValues = buttonGameValues;
      localStorage.setItem("buttonValue", JSON.stringify(gameButtonsValues));
      navigate("/");
    }
  };
  return (
    <main id="main" className="main">
      <div className="ng-star-inserted">
        <section className="section accounts">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="userscreen-title">Stake Setting</h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card stakesettingui"
              >
                <div className="card-body">
                  <div className="row">
                    {stakes?.map((_, idx) => {
                      return (
                        <div
                          key={idx}
                          className="col-md-3 col-6 ng-star-inserted"
                        >
                          <div className="form-row">
                            <label />
                            <input
                              {...register(`buttonGameValues.${idx}.value`)}
                              type="number"
                              className="form-control ng-untouched ng-pristine ng-valid"
                              id="stackVal0"
                            />
                          </div>
                        </div>
                      );
                    })}

                    <div className="col-md-12">
                      <button type="submit" className="btnsave">
                        submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default EditStake;
