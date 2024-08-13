const Banner = require('../models/banner');

// Get Banner Data
exports.getBanner = async (req, res) => {
    console.log("banner get");
  try {
    const banner = await Banner.findOne();
    console.log(banner);
    if (!banner) {
      return res.status(404).json({ message: 'Banner not found' });
    }
    res.json(banner);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Banner Data
exports.updateBanner = async (req, res) => {
  const { description, timer, link, visible } = req.body;
  try {
    const [updated] = await Banner.update({ description, timer, link, visible }, {
      where: { id: 1 },
    });
    if (updated) {
      

      res.json(updated);
    } else {
        const [banner, created] = await Banner.findOrCreate({
            where: {
                id: 1
            },
            defaults: {
                description,
                timer,
                link,
                visible
            }
        });
        return res.status(201).json({
            success: true,
            data: created
        })
    //   return res.status(404).json({ message: 'Banner not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
